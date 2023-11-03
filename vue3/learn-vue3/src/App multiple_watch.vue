<template>
	<div>d</div>
</template>

<script>
import { watch, ref, reactive } from 'vue';
export default {
	setup() {
		const x = ref(0);
		const y = ref(0);
		const obj = reactive({
			count: 0,
		});
		// watch(
		// 	() => x.value + y.value,
		// 	(sum, oldValue) => {
		// 		console.log('sum ', sum);
		// 		console.log('oldValue ', oldValue);
		// 	},
		// );
		// watch([x, y], ([newX, newY]) => {
		// 	console.log(newX, newY);
		// });

		//obj 객체 안의 count만 변경됐을때 감지됐을때
		watch(
			() => obj.count,
			(newValue, oldValue) => {
				console.log('new :', newValue);
			},
		);

		//obj 객체 안의 아무거나 변경이 감지됐을때
		watch(obj, (newValue, oldValue) => {
			console.log('new :', newValue);
		});
		return { x, y, obj };
	},
};
</script>

<style lang="scss" scoped></style>
