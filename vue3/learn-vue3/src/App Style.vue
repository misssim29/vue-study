<template>
	<div>
		<div :style="styleObject">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
			et quidem assumenda placeat. Et, ratione? Veniam hic temporibus
			vitae eum reprehenderit quasi. Ipsum molestiae nemo, minima qui
			omnis architecto quam.
		</div>
		<button @click="fontSize++">+</button>
		<button @click="fontSize--">-</button>
	</div>
</template>

<script>
import { computed, ref } from 'vue';
export default {
	setup() {
		// const styleObject = reactive({
		// 	color: 'red',
		// 	fontSize: '13px',
		// });
		const fontSize = ref(13);
		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});
		return { styleObject, fontSize };
	},
};
</script>

<style lang="scss" scoped></style>
