<template>
	<div>
		{{ counter }}
	</div>
	<button @click="AddCount">{{ Txtmessage }}</button>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const counter = ref(0);
		const Txtmessage = ref('Hello Vue3');
		const AddCount = () => {
			counter.value++;
		};
		return { counter, Txtmessage, AddCount };
	},
};
</script>

<style lang="scss" scoped></style>
