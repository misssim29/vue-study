<template>
	<div>
		<div
			:class="[
				isActive ? 'active-class' : 'class',
				errorClass,
				classObject,
			]"
		>
			텍스트입니다.
		</div>
		<button @click="toggle">toggle</button>
		<button @click="toggleError">toggleError</button>
	</div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);

		// const classObject = reactive({
		// 	active: true,
		// 	'text-danger': 'true',
		// });
		const classObject = computed(() => {
			return {
				active: true && true,
				'text-danger': true & true,
				'text-blue': true,
			};
		});

		const activeClass = ref('active');
		const errorClass = ref('active');

		const toggle = () => {
			isActive.value = !isActive.value;
		};
		const toggleError = () => {
			hasError.value = !hasError.value;
		};
		return {
			isActive,
			toggle,
			hasError,
			toggleError,
			classObject,
			activeClass,
			errorClass,
		};
	},
};
</script>

<style scoped>
div.active {
	font-weight: 900;
}
.text-danger {
	color: red;
}
</style>
