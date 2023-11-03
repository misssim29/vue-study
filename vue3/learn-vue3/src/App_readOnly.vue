<template>
	<div>
		<button @click="AddOrigin">Original ADD</button>
		<button @click="AddCopy">Copy ADD</button>
		<p>original : {{ original.count }}</p>
		<p>copy : {{ copy.count }}</p>
	</div>
</template>

<script>
import { reactive, readonly } from 'vue';
export default {
	setup() {
		const original = reactive({
			count: 0,
		});
		const copy = readonly(original);
		const AddOrigin = () => {
			original.count++;
		};

		//AddCopy의 copy 데이터는 readonly를 선언했기때문에 데이터 업데이트가 되지 않는다.
		const AddCopy = () => {
			copy.count++;
		};
		original.count++;
		return { AddOrigin, original, copy, AddCopy };
	},
};
</script>

<style lang="scss" scoped></style>
