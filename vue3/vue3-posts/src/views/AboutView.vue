<template>
	<div>
		<h2>About View</h2>
		<p>{{ $route.name }}</p>
		<button class="btn btn-primary" @click="$router.push('/')">
			Home으로 이동
		</button>
		<h2>Store</h2>
		<p>counter : {{ counter }}</p>
		<p>doubleCount : {{ doubleCount }}</p>
		<p>doubleCountPlusOne {{ doubleCountPlusOne }}</p>
		<button @click="increment()">Click</button>
		<p>{{ store.name }}</p>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
const route = useRoute();
console.log(route.name);

const store = useCounterStore();

//state를 구조분해 할당으로 가져올땐 아래로 storeToRefs를 사용
const { counter, doubleCount, doubleCountPlusOne } = storeToRefs(store);
const { increment } = store;
counter.value = 100;
</script>

<style lang="scss" scoped></style>
