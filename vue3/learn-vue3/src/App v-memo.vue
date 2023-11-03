<template>
	<div v-memo="[views, likes]">
		<p>subscribe : {{ subscribe }}</p>
		<p>views : {{ views }}</p>
		<p>likes : {{ likes }}</p>
	</div>
	<button @click="subscribe++">Subs++</button>
	<button @click="views++">View++</button>
	<button @click="likes++">Like++</button>
	<div>
		<p>subscribe : {{ subscribe }}</p>
		<p>views : {{ views }}</p>
		<p>likes : {{ likes }}</p>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const subscribe = ref(4000);
		const views = ref(400);
		const likes = ref(20);
		return { subscribe, views, likes };
	},
};
</script>

<style lang="scss" scoped></style>
