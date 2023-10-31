<template>
	<div>
		<h2>반응형</h2>
		<p>{{ reactiveMessage }}</p>
		<button @click="addReactiveMessage">Add Message</button>
		<h2>노말</h2>
		<p>{{ normalMessage }}</p>
		<button @click="addNormalMessage">Add Message</button>
	</div>
</template>

<script>
import { ref, onMounted, onBeforeMount } from 'vue';
export default {
	setup() {
		console.log('setup()');
		const reactiveMessage = ref('Hello Reactive Message');
		let normalMessage = 'Hello Normal Message';

		const addReactiveMessage = () => {
			reactiveMessage.value = reactiveMessage.value + '!';
		};
		// console.log('isRef(reactiveMessage)', isRef(reactiveMessage));

		const addNormalMessage = () => {
			normalMessage = normalMessage + '!';
		};

		onMounted(() => {
			console.log('onMounted');
		});
		onBeforeMount(() => {
			console.log('onBeformount');
		});

		return {
			reactiveMessage,
			normalMessage,
			addReactiveMessage,
			addNormalMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
