<template>
	<div>
		<p>author : {{ author }}</p>
		<p>title : {{ title }}</p>
	</div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
	setup() {
		const book = reactive({
			author: 'Vue team',
			year: 2020,
			title: 'Vue 3 Guide',
			description: '당신은 지금 바로 이 책을 읽습니다',
			price: '무료',
		});
		// const { author, title } = book;
		//반응성을 잃지 않으면서 구조분해 할당방법
		const { author, title } = toRefs(book);
		return { author, title, book };
	},
};
</script>

<style lang="scss" scoped></style>
