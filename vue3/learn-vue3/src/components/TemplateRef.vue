<template>
	<div class="container py-4">
		<input type="text" ref="input" />
		<p>{{ input }}</p>
		<p v-if="input">
			{{ input.value }}, {{ $refs.input.value }}
			{{ $refs.input == input }}
		</p>
		<hr />
		<ul>
			<!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">
				{{ fruit }}
			</li> -->
			<li
				v-for="fruit in fruits"
				:key="fruit"
				:ref="el => itemRefs.push(el.textContent)"
			>
				{{ fruit }}
			</li>
		</ul>
		<hr />
		<TemplateRefChild ref="child"></TemplateRefChild>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import TemplateRefChild from './TemplateRefChild.vue';

export default {
	setup() {
		const input = ref(null);
		console.log('setup', input.value);
		onMounted(() => {
			input.value.value = 'Hello World!';
			console.log('onMounted', input.value);
			itemRefs.value.forEach(item => console.log(item));
			console.log('child.message: ', child.value.message);
			child.value.sayHello();
		});
		const fruits = ref(['사과', '딸기', '포도']);
		const itemRefs = ref([]);

		const child = ref(null);

		return { input, fruits, itemRefs, child };
	},
	components: { TemplateRefChild },
};
</script>

<style lang="scss" scoped></style>
