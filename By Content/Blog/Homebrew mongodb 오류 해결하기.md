안녕하세요



오늘은 mongodb 설치 중 발생한 오류에 대해 포스팅합니다.



브류에서 mongodb를 설치하고 싶을 때



```
$ brew install mongodb
```



이런식으로 설치를 할 것입니다.



하지만 오늘 설치를 하려고 보니 다음과 같은 문제가 발생했습니다.



```
Error: No available formula with the name "mongodb" 
==> Searching for a previously deleted formula (in the last 
month)...
Warning: homebrew/core is shallow clone. To get complete history 
run:
  git -C "$(brew --repo homebrew/core)" fetch --unshallow

Error: No previously deleted formula found.
==> Searching for similarly named formulae...
Error: No similarly named formulae found.
==> Searching taps...
==> Searching taps on GitHub...
Error: No formulae found in taps.
```



mongodb라는 패키지를 찾지 못하는 모습을 볼 수 있습니다.

이는 홈브류에서 mongodb 포뮬라 제공을 중단하였기 때문입니다.

그 이유는 공식 문서를 따르면

**mongodb가 귀하를 위해 일을 중단했기 때문에 여기에 오 셨다면 Homebrew 핵심 공식이 공개 소스 가 아닌 라이센스 로 마이그레이션 된 이후 해당 공식을 제거했습니다**

라고 나와있네요. 



따라서 다음과 같은 방법으로 설치를 해 줍시다.



```
$ brew install mongodb-community
```

이렇게 사용자 정의 탭을 사용하면 브류에서 패키지를 찾아 설치해 줍니다.



오류 원인 찾느라 진땀뻈네요..