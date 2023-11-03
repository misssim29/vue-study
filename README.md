# vue-cli 설치

npm install -g @vue/cli

# vue-cli 생성

vue create vue-cli(폴더명 지정)

# 경로이동

cd vue-cil

# 서버 실행

npm run serve

# vue-cli에 axios 설치하기

npm i axios

# router 설치

npm install --save vue-router

# 경로 찾아가서 router 추가

vue add router

# vuex 설치하기

npm install vuex@next --save

# vite 설치방법

npm init vue

# VUE3 API 메모
## ref()
반응형 데이터바인딩 훅 (리액트의 useEffect랑 비슷한 역할같음)
```
let message = ref('Hello Ref!');

const addMessage = () => {
    message.value = message.value + '!';
};
```
addMessage를 누르면 계속 !가 추가되며 데이터가 업데이트된다.

## reactive()
객체타입에만 동작하는 데이터바인딩 훅, 아래와같이 객체타입에만 반응한다.
```
const state = reactive({
    count: 0,
});
const increment = () => {
    state.count++;
}
    
```

## toRefs()
구조분해할당을 하는데 반응성을 잃지 않을때 쓸 수 있음
```
const { author, title } = toRefs(book);
```
위의 author, title이 데이터 수정이 가능하게됨

## computed()
```
const firstName = ref('홍');
const lastName = ref('길동');
const fullName = computed({
get() {
return firstName.value + ' ' + lastName.value;
},
set(value) {
// const [first, last] = value.split(' ');
// 구조분해할당
[firstName.value, lastName.value] = value.split(' ');
},
});
fullName.value = '강 동원';
```
get과 set을 이용해서 computed를 변경가능하게 쓸수 있음

## v-show와 v-if의 차이
v-show는 렌더링을 일단 한다. v-if는 렌더링을 안한다.
고로 무언가를 자주 전환해야한다면 v-show를 사용하고 조건이 자주 변경되지 않는다면 v-if를 사용하는게 좋다

## v-cloak
v-cloak을 통해서 로딩바를 만들수있다.
데이터를 받아오기전에 보여지는 효과
```
<p v-cloak>{{ message }}</p>
<style scoped>
[v-colak] {
	display: none;
}
</style>
```

## v-memo
성능최적화를 위해 쓰인다 보통 데이터가 1000개 이상일때 쓴다고한다..

## event 수식어 : stopPropagation
레이어가 겹칠경우 부모태그와 자식태그의 이벤트 겹침현상을 방지해준다
```
const clickSpan = e => {
    console.log('clickSpan');
    e.stopPropagation();
};
```

## v-model
양방향 바인딩
한글 text박스에선 불리하지만, checkbox나 radio박스에 쓸땐 효율적일것같다

## watch
message가 변경되었을때 newValue와 oldValue를 추출할수있다.
(반응형 상태 변경시 사용하는 API)
```
watch(message, (newValue, oldValue) => {
    console.log('new : ', newValue);
    console.log('old : ', oldValue);
});
```

## global로 scss 적용하는법
웹팩이나 config쪽에서 베이스로 쓰일 scss 연결해주면
변수를 아무 컴포넌트에다 갖다 쓸수 있다
(vite)
```
css: {
    preprocessorOptions: {
        scss: {
            additionalData: '@import "@/css/base.scss";',
        },
    },
},
```