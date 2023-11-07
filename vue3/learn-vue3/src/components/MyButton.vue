<template>
	<div class="p-3 bg-danger">
		<button type="button" class="btn btn-primary" v-bind="$attrs">
			My Button
		</button>
	</div>
</template>

<script>
export default {
	//props되는 속성 상속 막기
	inheritAttrs: false,
	setup(props, context) {
		console.log(context.attrs);
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
