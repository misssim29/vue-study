<template>
	<label>
		{{ label }}
		<input v-model="value" type="text" />
		<!-- :value="modelValue"
			@input="event => $emit('update:modelValue', event.target.value)" -->
	</label>
</template>

<script>
import { computed } from 'vue';

export default {
	props: ['title', 'label'],
	emit: ['update:title'],
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.title;
			},
			set(value) {
				emit('update:title', value);
			},
		});

		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
