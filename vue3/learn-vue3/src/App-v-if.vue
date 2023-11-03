<template>
	<div>
		<h2 v-if="visible">Hello!</h2>
		<h2 v-else>false입니다.</h2>
		<button @click="visible = !visible">toggle</button>
		<hr />
		<button @click="type = 'A'">A</button>
		<button @click="type = 'B'">B</button>
		<button @click="type = 'C'">C</button>
		<button @click="type = ''">기타</button>
		<h2 v-if="type === 'A'">A입니다.</h2>
		<h2 v-else-if="type === 'B'">B입니다.</h2>
		<h2 v-else-if="type === 'C'">C입니다.</h2>
		<h2 v-else>A,B,C가 아닙니다.</h2>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const visible = ref(false);
		const type = ref('A');
		return {
			visible,
			type,
		};
	},
};
</script>

<style lang="scss" scoped></style>
