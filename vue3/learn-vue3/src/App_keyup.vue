<template>
	<div>
		<input type="text" @keyup.enter="addTodo" />
		<ul>
			<li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
		</ul>
		<input type="text" @keyup.shift.enter="addTodo" />
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		const todos = reactive([]);
		const addTodo = event => {
			todos.push(event.target.value);
			event.target.value = '';
			event.target.focus();
		};
		return { addTodo, todos };
	},
};
</script>

<style lang="scss" scoped></style>
