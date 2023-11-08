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

## v-model 자식부모 양방향 바인딩
username에 담겨있는 데이터를 자식으로 내리고 다시 변경된 데이터를 부모로 옮겨올수있다.
```
//부모컴포넌트
<LabelInput v-model="username" label="이름"></LabelInput>
//자식컴포넌트
<input
    type="text"
    :value="modelValue"
    @input="event => $emit('update:modelValue', event.target.value)"
/>
props: ['modelValue', 'label'],
emit: ['update:modelValue'],
```

## props되는 속성 상속 막기
```
inheritAttrs: false,
```

## 특정 엘레먼트에 props되는 속성 물려주기
v-bind="$attrs"로 물려줄수 있다.
```
<button type="button" class="btn btn-primary" v-bind="$attrs">
    My Button
</button>
```

## Provide와 Inject
컴포넌트가 딥해질때 최상위컴포넌트에서 맨아래컴포넌트까지 데이터를 한번에 내릴수 있는 방법
```
상위 컴포넌트에서 키,값 형태로 provide로 값을 넘긴다
provide('message', message);
하위 컴포넌트에서 inject로 값을 받는다.
const message = inject('message');
만약 provide한 값이 없을경우 아래와같이 default값을 설정해 받을 수 있다.
const message = inject('message','default');

```

## getElementId 대신 ref로 선택자 가져오는 방법
html에서 ref값과 setup에서 ref를 담은 변수값을 동일하게 해서 하면 연결이 된다.
```
<input type="text" ref="inputRef" />
const inputRef = ref(null);
onMounted(() => {
    console.log(inputRef.value);
});
return { inputRef };
```

## ref로 부모 자식간 쉽게접근하는법 (하지만 일반적으로 emit이나 props를 사용하는게 좋다)
- 부모->자식 데이터접근
자식컴포넌트에 ref를 부여해 setup에서 ref명.value로 함수나 변수에 접근가능
```
<TemplateRefChild ref="child"></TemplateRefChild>
child.value.sayHello();
```
- 자식->부모 데이터접근
$parent를 사용해 부모의 데이터에 접근할 수 있다.
```
{{ $parent }}
<li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
```

## setup을 사용해서 props, emit 이용방법
아래와같이 가져와서 사용할 수 있다.
```
//일반형
defineProps(['modelValue', 'label']);
//객체로 가져오기
const props = defineProps({
    	title: {
		type: String,
		required: true,
	},
});
const emit = defineEmits(['toggleLike']);
```

## setup에서 componentRef 사용하는법
```
defineExpose({
	message,
	sayHello,
});
```
defineExpose를 통해서 원래 setup() 버전에서의 return 역할을 해주는걸 해줘야 부모자식컴포넌트간에 ref 접근이 가능하다.


## active-class
active-class="active" 로 활성화되는 router-link에 class를 줄수있다.


## 프론트엔드 db 서버
처음에 $ npm install json-server --save-dev 로 설치
package.json에     "db": "json-server --watch db.json --port 5000" 로 포트 및 명령어 설정해서
npm run db하면 db서버 켜짐
db는 root디렉토리에 db.json으로 담겨있음


