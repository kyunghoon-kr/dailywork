안녕하세요,

이번 개발일지는 CommitManager라는 앱 어플리케이션에 대한 개발 일지입니다.

아직 배포된 앱도 아니며, 개발 중에 있으며, 완성도가 높은 앱일지는 모르지만, 이번 앱을 제작하며 공부한 내용에 대해 공유하고자 개발일지를 작성하게 되었습니다. 개발 기간이 꽤 길어질 거라고 예상되어, 여태까지 진행한 부분에 대하여 일지를 작성하려고 해요!

---

기본적으로 CommitManager는 Android(Kotlin) + Node.js(Express)를 사용합니다.

프론트엔드인 Android(Kotlin)은 다른 분이 담당할 예정이고, 저는 Nodejs의 Express 프레임워크를 사용하여 백엔드를 구축할 예정입니다.

CommitManager는 유저의 커밋 내역을 Github Api로부터 요청받아 오늘 자 커밋이 없다면 알람을 보내주는 서비스를 제공할 예정이므로, Github Api에 대한 이해가 기본적으로 전제되었는데요.

우선 이 Api를 분석하여 Android에서 원하는 데이터를 편하게 가져가게끔 REST를 구축할 예정이므로,

아마, 제 포스팅에서는 Express 서버 코드 위주로 올라갈 것 같습니다!

시작 전에, Api 문서를 파헤쳐보는 것은 필수겠죠?

[https://developer.github.com/v3/](https://developer.github.com/v3/)

[

GitHub API v3

Get started with one of our guides, or jump straight into the API documentation.

developer.github.com



](https://developer.github.com/v3/)

Github Api v3은 유저 정보와 이벤트 내역 등을 불러올 수 있는 REST API를 제공합니다.

가장 최근 버전인 v4는 GraphQL에 대한 API이므로, CommitManager에서 사용할 일은 없을 것 같습니다.

**Authentication** 부분을 살펴 봅시다.

기본 스키마는 [https://api.github.com](https://api.github.com)를 사용하는데, 문서에서는 curl을 통하여 데이터 요청을 하고 있습니다.

curl은 CLIENT URL로 데이터 전송을 할 수 있게 해 주는 라이브러리인데요. 터미널에서 문서에 작성된 명령어대로 api를 요청할 수도 있지만, 보다 더 편하게 POSTMAN을 사용해 봅시다.

[https://www.postman.com/](https://www.postman.com/)

[

Postman | The Collaboration Platform for API Development

Simplify workflows and create better APIs – faster – with Postman, a collaboration platform for API development.

www.postman.com



](https://www.postman.com/)

POSTMAN을 사용하면 원하는 URL에 원하는 헤더와 파라미터를 넣어 데이터를 요청해 볼 수 있습니다.

굳이 따로 axios 같은 라이브러리를 이용하여 따로 요청하거나 curl을 사용할 필요 없이, POSTMAN을 이용하면 훨씬 더 간단하게 데이터 요청을 해볼 수 있습니다.

한번 유저 정보를 띄우는 데이터를 받아와 볼까요?

요청 URL은 [https://api.github.com/users/{User 아이디}](https://api.github.com/users/hoonkk)

이며, GET으로 요청해 봅시다.

이때의 User 아이디는 가입할 때 입력한 닉네임인데요. 본인의 깃허브 페이지에 가보면 url에 떠있는 id를 사용하여 넣어주면 됩니다.

한번 요청 결과를 볼까요 ?

[##_Image|kage@bIceV7/btqDsbcdSqH/SoRpTRNXGqKJqkwBeXSxz0/img.png|alignCenter|data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

다음과 같은 결과가 나오시나요?

이 /users에서는 사용자 정보, 프로필 사진 이미지 링크, 각종 다른 api에 접근할 id, 닉네임, 아이디, 이메일, 팔로워, 팔로잉 수, 포크한 레포지토리 수 등등 정말 다양한 정보를 제공합니다.

실제로 response data를 훑어보면 이런 것 까지 제공하나? 싶을 정도로 세세한 정보를 받아오는 것을 볼 수 있습니다.

그렇다면 가장 중요한 커밋 내역은 어떻게 요청할까요 ?

Api 문서를 훑어보면, events처리에 대한 내용이 있습니다.

다시 한번 POSTMAN에 다음과 같이 요청해 봅시다.

[https://api.github.com/users/{User Id}/events](https://api.github.com/users/hoonkk/events)

[##_Image|kage@IwGMW/btqDsOODuj8/A3QAbhqb2wrPT9P9FCKEx1/img.png|alignCenter|data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

가장 최근의 커밋으로부터 50개의 커밋에 대한 정보를 쭉 뱉어내는 것을 볼 수 있습니다.

이 Api를 이용하면 오늘 자 커밋 내역을 검사하는 로직을 짤 수 있겠죠?

이 Github Api v3을 이용하여 CommitManager에 필요한 데이터를 뽑아올 수 있겠네요.

공식 문서에 pagination이나, OAuth 인증같은 중요한 내용이 더 남아있지만, 이 내용은 다음에 깃허브 인증 단계에 들어갈 때 소개하도록 하겠습니다.

이상으로, 포스팅을 마칩니다.