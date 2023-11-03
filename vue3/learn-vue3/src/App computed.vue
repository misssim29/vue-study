<template>
	<div>
		{{ teacher.name }}
	</div>
	<h3>강의가 있습니까?</h3>
	<p>{{ hasLecture }}</p>
	<p>{{ existLecture() }}</p>
	<button @click="counter++">Count : {{ counter }}</button>
	<h2>이름</h2>
	<p>{{ fullName }}</p>
</template>

<script>
import { reactive, computed, ref } from 'vue';
export default {
	setup() {
		const teacher = reactive({
			name: '짐코딩',
			lectures: ['HTML/CSS', 'Javscript', 'Vue3'],
		});

		//computed가 더 유리함
		const hasLecture = computed(() => {
			return teacher.lectures.length > 0 ? '있음' : '없음';
		});
		const existLecture = () => {
			return teacher.lectures.length > 0 ? '있음' : '없음';
		};
		const counter = ref(0);

		const firstName = ref('홍');
		const lastName = ref('길동');

		const fullName = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				// const [first, last] = value.split(' ');
				// 구조분해할당
				[firstName.value, lastName.value] = value.split(' ');
			},
		});
		console.log('console 출력 : ', fullName.value);
		fullName.value = '짐 코딩';

		return {
			teacher,
			hasLecture,
			existLecture,
			counter,
			fullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
