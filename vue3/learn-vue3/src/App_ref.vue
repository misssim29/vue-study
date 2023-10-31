<template>
	<div>
		<p>{{ message }}</p>
		<button @click="addMessage">add Click</button>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		let message = ref('Hello Ref!');

		const addMessage = () => {
			message.value = message.value + '!';
		};
		console.log(message, typeof message.value);
		return {
			message,
			addMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
