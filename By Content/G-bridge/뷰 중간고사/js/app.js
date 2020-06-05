import CoffeeMenu from './models/CoffeeMenu.js';
import BeverageMenu from './models/BeverageMenu.js';
import SearchMenu from './models/SearchMenu.js';

var eventBus = new Vue();

// 검색 창 컴포넌트
Vue.component('menu-search', {
    // menu-search 컴포넌트는 form안에 있으므로 엔터키를 누르면 자동으로 submit 이벤트가 발생함
    // 이를 방지하기 위해 실제 입력칸 앞에 <input hidden="hidden"/>을 추가하여 submit 이벤트가 발생하지 않도록 막음
    
    // v-if 구문으로 input창이 비어있지 않다면 x버튼이 나오도록 함(이때 input 안의 상태값은 v-model로 관리함)
    // x버튼을 누르면 부모 컴포넌트로부터 emit으로 전달받은 searchMenu 메소드를 통하여 메뉴판일때 누르면 검색 결과가, 검색 결과일때 누르면 메뉴판이 나오도록 설계
    template: `
        <div>
            <input hidden="hidden" /> 
            <input type="text" placeholder="드실 음료를 선택하세요" 
                v-on:keyup.enter="searchMenu" v-model="inputContent"/>
            <div v-if="inputContent!==''">
                <span class="container">
                    <button class="btn-reset" type="button" v-on:click="searchMenu"></button>
                </span>
            </div>
        </div>
    `,
    data() {
        return {
            inputContent: '',
            // 전역에서 설정한 isSearched 변수와 달리, menu-search 내에서 메뉴판인지 검색화면인지 판별하는 변수
            isSearched: false
        }
    },
    created() {
        // 이벤트 버스를 이용하여 menu-board 컴포넌트에서 발생한 이벤트를 전달받는다.
        eventBus.$on('triggerEventBus', (_menuName) => { // 람다식 콜백함수로 이벤트 버스 내 값을 전달한다.
            // 커피 메뉴의 경우 '메뉴 가격'의 형태로 오므로 공백을 통해 스플릿하여 이름만 받아온다.
            // 입력 창에 스플릿 한 값을 넣어준다.
            this.inputContent = _menuName.split(" ")[0];
            // 입력창에 입력된 검색어로 검색한다.
            this.$emit('search-menu');
            // 상태 값을 다시 바꿔준다
            this.isSearched = !this.isSearched;
        });
       
    }
    ,
    methods: {
        searchMenu: function(){
            this.isSearched = !this.isSearched;
            // 메뉴판에서는 x버튼을 눌러도 검색화면으로 넘어가지 않는다
            // 검색화면에서는 x버튼을 누르면 메뉴판으로 다시 초기화된다.

            if(!this.isSearched)
            // 부모 컴포넌트로부터 수신한 이벤트
                this.$emit('search-menu');

            // x버튼을 누르면 검색창이 다시 비워지게 함
            this.inputContent='';
        }
    }
});


// 메뉴 탭, 그리고 메뉴판을 보여주는 컴포넌트
Vue.component('menu-board', {
    // 템플릿
    // 각각 탭을 누르면 해당 메뉴로 넘어가도록 설정한 메소드를 연결한다
    // items가 비어있지 않다면(전달받은 데이터가 있다면) 해당 데이터를 출력한다
    // 이때 커피 메뉴의 데이터인지, 음료 메뉴의 데이터인지를 판별하는 것은 item.price의 존재 여부로 판별한다
    // (커피 메뉴의 데이터에는 price값이 없고, 음료 메뉴에는 있기 때문)
    // item.price가 존재하지 않는다면(커피 메뉴라면) 이름을 출력하고 index 값을 통해 넘버링한다.
    // item.price가 존재한다면(음료 메뉴라면) 이름, 가격, x버튼이 나타나게 한다.
    // 이떄 음료 메뉴에서의 x버튼을 누르면 해당 데이터가 삭제된다.
    // item.length가 0이라면(데이터가 비어있다면) '등록된 커피(or 음료) 메뉴가 없습니다' 가 보이게끔 한다.
    // 음료/커피 메뉴의 이름을 누르면 그 이름이 검색어로 입력되어 검색 화면으로 넘어간다.
    template: `
        <div>
            <ul class="tabs">
                <li id="coffee" v-on:click="changeToCoffee" class="active">커피 메뉴</li>
                <li id="beverage" v-on:click="changeToBeverage">음료 메뉴</li>
            </ul>
            <ul class="list">
                <div v-if="items.length !== 0">
                    <li v-for="item in items">
                        <span class="number">
                            {{!item.price ? items.indexOf(item)+1 : ""}}
                        </span>
                        <span @click="searchClickedMenu(item.name)">
                            {{ item.name }}
                        </span>
                        <div v-if="item.price">
                            <span class="price">
                                {{ item.price }}
                            </span>
                            <span @click="removeItem(item.name)">
                                <button type="button" class="btn-remove"></button>
                            </span>
                        </div>
                    </li>
                </div>
            <div v-else-if="items.length === 0">
                등록된 {{ menu }} 메뉴가 없습니다.
            </div>
            </ul>
        </div>
    `,
    created() {
        // 기본으로 커피 메뉴 탭이 보여지도록 설계
        // list()에서 전달받은 Promise 객체의 데이터를 빼내는 과정
        CoffeeMenu.list().then( response => {
            this.items = response;
        });
    },
    data() {
        // items에 커피 메뉴, 음료 메뉴에서 각각 전달받을 데이터를 연결한다.
        // 기본 메뉴는 커피 메뉴이다.
        return {
            items : [],
            menu: "커피"
        }
    },
    methods: {
        // '커피 메뉴'를 누르면 발생하는 메소드
        // 커피 메뉴의 class를 active 값으로 바꾸고, 음료 메뉴의 class는 삭제하여 커피 메뉴 탭이 활성화되도록 한다.
        // items에다가 CoffeeMenu로 부터 전달받은 데이터를 넣어 메뉴판에 커피 메뉴가 뜨도록 한다.
        changeToCoffee: function(){
            document.getElementById("beverage").setAttribute('class', '')
            document.getElementById("coffee").setAttribute('class', 'active');
            CoffeeMenu.list().then( response => {
                this.items = response;
            });
            this.menu = "커피";
        },
        // '음료 메뉴'를 누르면 발생하는 메소드
        // 음료 메뉴의 class를 active 값으로 바꾸고, 커피 메뉴의 class는 삭제하여 음료 메뉴 탭이 활성화되도록 한다.
        // items에다가 Beverage로 부터 전달받은 데이터를 넣어 메뉴판에 커피 메뉴가 뜨도록 한다.
        changeToBeverage: function(){
            document.getElementById("coffee").setAttribute('class', '')
            document.getElementById("beverage").setAttribute('class', 'active');
            BeverageMenu.list().then( response => {
                this.items = response;
            });
            this.menu = "음료";
        },
        // 음료 메뉴에 존재하는 x 버튼을 눌렀을 때 발생하는 메소드
        // 클릭한 메뉴를 BeverageMenu의 데이터에서 삭제하고, 삭제가 반영된 데이터를 다시 메뉴판에 적용하여 보여지게 한다.
        removeItem: function(name) {
            BeverageMenu.remove(name);
            BeverageMenu.list().then( response => {
                this.items = response;
            });
        },
        searchClickedMenu: function(menuName) {
            // 이벤트 버스를 이용하여 menu-search 컴포넌트에 선택한 메뉴 이름을 전달한다.
            eventBus.$emit('triggerEventBus', menuName);
        }
    }
});


// 검색 결과가 나오는 컴포넌트
Vue.component('search-result', {
    // v-for 구문을 이용하여 출력
    // SearchMenu 데이터로부터 이미지 소스와 텍스트값을 받아와 출력
    template: `
        <ul>
            <li v-for="result in results">
                {{ result.name }}
                <img :src="result.image"></img>
            </li>
        </ul>
    `,
    data() {
        return {
            results : []
        }
    },
    created() {
        // Promise 객체로부터 SearchMenu.js에 선언된 데이터 값을 받아온다. 
        SearchMenu.list().then(response => {
            this.results = response;
        })
    }
});

new Vue ({
    el: "#app",
    data() {
        return {
            isSearched: false
        }
    },
    methods: { 
        // 자식 컴포넌트에 전달해 주기 위한 메소드를 선언(자식 컴포넌트인 menu-search에서는 isSearched 변수를 처리할 방법이 없으므로 메소드로 만들어 전달해 준다) 
        search: function() {
            // menu-search 컴포넌트에서 x버튼을 누를 때 마다 메뉴판과 검색 결과 창을 오갈 수 있도록 bool 변수 플래그를 이용하여 설계
            this.isSearched = !this.isSearched;
        }
    }
});