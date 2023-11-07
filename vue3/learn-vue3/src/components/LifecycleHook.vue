<template>
	<div class="container py-4">
		<input type="text" ref="inputRef" value="hello world" />
		<button @click="visible = !visible">Click</button>
		<LifeCycleChild v-if="visible"></LifeCycleChild>
		<p id="message">{{ message }}</p>
	</div>
</template>

<script>
import LifeCycleChild from './LifeCycleChild.vue';
import { onBeforeMount, onMounted, ref, onBeforeUpdate, onUpdated } from 'vue';

export default {
	setup() {
		// console.log('setup');
		const inputRef = ref(null);
		const message = ref('');
		const visible = ref(false);
		// onBeforeMount(() => {
		// 	console.log('onBeforeMount');
		// });
		// onMounted(() => {
		// 	console.log('onMount', inputRef.value.value);
		// });
		onBeforeUpdate(() => {
			console.log('onBeforeUpdate', message.value);
			console.log(
				'DOM Content: ',
				document.querySelector('#message').textContent,
			);
		});
		onUpdated(() => {
			console.log('onUpdated', message.value);
			console.log(
				'DOM Content: ',
				document.querySelector('#message').textContent,
			);
		});
		return { inputRef, message, visible };
	},
	components: { LifeCycleChild },
};
</script>

<style lang="scss" scoped></style>
