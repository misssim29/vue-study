<template>
	<div>
		<p>{{ msg }}</p>
		<p v-text="msg"></p>
		<p v-text="htmlStr"></p>
		<p v-html="htmlStr"></p>
		<p v-cloak>{{ message }}</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const msg = ref('안녕하세요');
		const htmlStr = ref('<strong>안녕!!!</strong>');
		const message = ref('ddd');
		return { msg, htmlStr, message };
	},
};
</script>

<style scoped>
[v-colak] {
	display: none;
}
</style>
