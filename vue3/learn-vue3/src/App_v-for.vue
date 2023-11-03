<template>
	<div>
		<div v-for="(item, index) in evenItems" :key="item.id">
			<li>ID : {{ item.id }} 인덱스 : {{ index }}, {{ item.message }}</li>
		</div>
		<hr />
		<ul>
			<li v-for="(value, key, index) in MyObject" :key="key">
				{{ index }}-{{ key }}-{{ value }}
			</li>
		</ul>
	</div>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
	setup() {
		const Items = reactive([
			{ id: 1, message: 'Java' },
			{ id: 2, message: 'HTML' },
			{ id: 3, message: 'CSS' },
			{ id: 4, message: 'Vue' },
		]);
		const evenItems = computed(() =>
			Items.filter(item => item.id % 2 === 0),
		);

		const MyObject = reactive({
			title: '제목',
			author: '홍길동',
			publish: '2023-11-03',
		});

		return { Items, evenItems, MyObject };
	},
};
</script>

<style lang="scss" scoped></style>
