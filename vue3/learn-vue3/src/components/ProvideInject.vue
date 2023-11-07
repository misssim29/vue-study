<template>
	<div class="container py-4">
		<div class="card">
			<div class="card-header">ProvideInject Component</div>
			<div class="card-body"><Child></Child></div>
		</div>
		<button @click="count++">Click</button>
		<p>AppMessage : {{ appMessage }}</p>
	</div>
</template>

<script>
import { ref, provide, inject } from 'vue';
import Child from './Child.vue';

export default {
	components: { Child },
	setup() {
		const staticMessage = 'static message';
		const message = ref('message');
		const count = ref(10);
		// provide('static-message', staticMessage);
		provide('message', message);
		provide('count', count);

		const appMessage = inject('app-message');
		return { count, appMessage };
	},
	mounted() {
		console.log('this.msg:', this.msg);
	},
};
</script>

<style lang="scss" scoped></style>
