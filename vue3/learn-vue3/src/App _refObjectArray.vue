<template>
	<div></div>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
	setup() {
		// ref -> object
		const count = ref(0);
		const state = reactive({
			count,
		});
		count.value++;
		count.value++;
		console.log('state.count:' + state.count + ', count:' + count.value);

		// ref -> Array
		const message = ref('hello');
		const arr = reactive([message]);
		console.log('state.count:' + arr[0].value);
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
