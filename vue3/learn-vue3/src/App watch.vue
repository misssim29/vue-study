<template>
	<div>
		{{ message }}
	</div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
	setup() {
		const message = ref('');
		watch(message, (newValue, oldValue) => {
			console.log('new : ', newValue);
			console.log('old : ', oldValue);
		});
		return { message };
	},
};
</script>

<style lang="scss" scoped></style>
