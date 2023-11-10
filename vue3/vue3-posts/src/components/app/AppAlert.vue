<template>
	<!-- <Transition name="slide-fade">
		<div
			v-if="show"
			class="app-alert alert"
			role="alert"
			:class="typeStyle"
		>
			{{ message }}
		</div>
	</Transition> -->
	<div class="app-alert">
		<TransitionGroup name="slide-fade">
			<div
				v-for="({ message, type }, index) in alerts"
				:key="index"
				class="alert"
				role="alert"
				:class="typeStyle(type)"
			>
				{{ message }}
			</div>
		</TransitionGroup>
	</div>
</template>

<script setup>
import { useAlert } from '@/hooks/alert';

const { alerts } = useAlert();

const typeStyle = type => (type === 'error' ? 'alert-danger' : 'alert-primary');

// const props = defineProps({
// 	show: {
// 		type: Boolean,
// 		default: false,
// 	},
// 	message: {
// 		type: String,
// 		required: true,
// 	},
// 	type: {
// 		type: String,
// 		default: 'error',
// 		// validator: value => ['success', 'error'].includes(value),
// 	},
// });

// const typeStyle = computed(() => {
// 	return props.type === 'error' ? 'alert-danger' : 'alert-primary';
// });
</script>

<style scoped>
.app-alert {
	position: fixed;
	top: 10px;
	right: 10px;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}
.slide-fade-enter-to,
.slide-fade-leave-from {
	opacity: 1;
	transform: translateY(0px);
}
.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: all 0.3s ease-out;
}
</style>
