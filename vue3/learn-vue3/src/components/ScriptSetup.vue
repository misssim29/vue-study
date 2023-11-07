<template>
	<div class="container py-4">
		<div>{{ msg }}</div>
		<input v-model="message" type="text" />
		<button @click="sayHello">버튼</button>
		{{ message }}
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:isLike="true"
		></PostItem>
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:isLike="true"
		></PostItem>
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:isLike="true"
		></PostItem>
		<hr />
		<TemplateRefChild ref="child"></TemplateRefChild>
		<template v-if="child">{{ child.message }}</template>
		<hr />
		<MyButton class="parent-class"></MyButton>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import PostItem from '@/components/setup/PostItem.vue';
import TemplateRefChild from '@/components/setup/TemplateRefChild.vue';
import MyButton from './setup/MyButton.vue';

const msg = 'Hello World';
const sayHello = () => {
	alert('Hello world');
};
const message = ref('');
const child = ref(null);

defineExpose({
	msg,
});

//원래는 이렇게 해야하지만
// async function callApi() {
// 	const response = await axios(
// 		'https://dummy.restapiexample.com/api/v1/employees',
// 	);
// }
// callApi();
// script setup을 사용하면 이렇게 간략하게 api 호출이 가능하다
const response = await axios(
	'https://dummy.restapiexample.com/api/v1/employees',
);
</script>

<style lang="scss" scoped></style>
