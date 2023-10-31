<template>
	<div>
		<h2>보간법</h2>
		<p>{{ message }}</p>
		<p v-once>{{ message }}</p>
		<button @click="AddMessage">add Message</button>
		<hr />
		<h2>v-html</h2>
		<!--사용자가 관여될수있는 data관련에는 안쓰는게 좋음-->
		<p v-html="rawHtml"></p>
		<hr />
		<h2>속성 바인딩</h2>
		<div :title="dynamicTitle">마우스를 올려보세요.</div>
		<input type="text" :value="InputValue" :disabled="isInputDisabled" />
		<input v-bind="attrs" />
		<hr />
		<h2>Javascript</h2>
		<div>
			<!-- javascript식을 바로 {{  }} 안에 때려넣을수 있음 -->
			{{ message.split('').reverse().join('') }}
			{{ isInputDisabled ? '예' : '아니오' }}
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const message = ref('안녕하세요');
		const AddMessage = () => {
			message.value = message.value + '!';
		};
		const rawHtml = ref('<strong>안녕하세요</strong>');
		const dynamicTitle = ref('안녕하세요!!!!!!');
		const InputValue = ref('텍스트');
		const isInputDisabled = ref(true);

		// v-bind로 다중속성 바인딩하기
		const attrs = ref({
			type: 'password',
			value: '1234556',
			disabled: false,
		});

		return {
			message,
			AddMessage,
			rawHtml,
			dynamicTitle,
			InputValue,
			isInputDisabled,
			attrs,
		};
	},
};
</script>

<style lang="scss" scoped></style>
