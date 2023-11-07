<template>
	<div class="p-3 bg-danger">
		<button type="button" class="btn btn-primary" v-bind="$attrs">
			{{ message }}
		</button>
	</div>
</template>

<script>
export default {
	//props되는 속성 상속 막기
	inheritAttrs: false,
};
</script>
<script setup>
import { ref } from 'vue';
const message = ref('message');
</script>

<style lang="scss" scoped></style>
