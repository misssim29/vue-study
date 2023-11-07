<template>
	<div>
		<LabelInput
			label="성"
			:value="firstname"
			@input="event => $emit('update:firstname', event.target.value)"
		></LabelInput>
		<LabelInput
			label="이름"
			:value="lastname"
			@input="event => $emit('update:lastname', event.target.value)"
		></LabelInput>
	</div>
</template>

<script>
import LabelInput from './LabelInput.vue';

export default {
	props: ['firstname', 'lastname'],
	emits: ['update:firstname', 'update:lastname'],
	components: {
		LabelInput,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
