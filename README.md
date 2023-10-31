## vue-cli 설치

npm install -g @vue/cli

## vue-cli 생성

vue create vue-cli(폴더명 지정)

## 경로이동

cd vue-cil

## 서버 실행

npm run serve

## vue-cli에 axios 설치하기

npm i axios

## router 설치

npm install --save vue-router

## 경로 찾아가서 router 추가

vue add router

## vuex 설치하기

npm install vuex@next --save

## vite 설치방법

npm init vue

# ref()
반응형 데이터바인딩 훅 (리액트의 useEffect랑 비슷한 역할같음)
```
let message = ref('Hello Ref!');

const addMessage = () => {
    message.value = message.value + '!';
};
```
addMessage를 누르면 계속 !가 추가되며 데이터가 업데이트된다.

# reactive()
객체타입에만 동작하는 데이터바인딩 훅, 아래와같이 객체타입에만 반응한다.
```
const state = reactive({
    count: 0,
});
const increment = () => {
    state.count++;
}
    
```

# toRefs()
구조분해할당을 하는데 반응성을 잃지 않을때 쓸 수 있음
```
const { author, title } = toRefs(book);
```
위의 author, title이 데이터 수정이 가능하게됨
