<template>
	<!--class와 style속성은 병합이 되지만 id와 같은 다른 속성은 부모요소로 덮어쓰기가된다.-->
	<label class="child-class" style="border: 1px solid black" id="child-id">
		{{ label }}
		<input v-model="value" type="text" />
		<!-- :value="modelValue"
			@input="event => $emit('update:modelValue', event.target.value)" -->
	</label>
</template>

<script>
import { computed } from 'vue';

export default {
	props: ['modelValue', 'label'],
	emit: ['update:modelValue'],
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			},
		});

		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
