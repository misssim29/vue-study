<template>
	<div class="row">
		<div class="col col-2">
			<select
				class="form-select"
				aria-label="Default select example"
				v-model="type"
			>
				<option value="news">뉴스</option>
				<option value="notice">공지사항</option>
			</select>
		</div>
		<div class="col col-8">
			<input type="email" class="form-control" v-model="title" />
		</div>
		<div class="col col-2 d-grid">
			<!-- @click="$emit('createPost', 1, 2, 3, 'ㅇㅇㅇ')" -->
			<button class="btn btn-primary" @click="createPost">추가</button>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	// emits: ['createPost'],\
	emits: {
		createPost: newPost => {
			if (!newPost.title) {
				return false;
			} else if (!newPost.type) {
				return false;
			}
			return true;
		},
	},
	setup(props, { emit }) {
		const type = ref('news');
		const title = ref('');
		const createPost = () => {
			const newPost = {
				type: type.value,
				title: title.value,
			};
			emit('createPost', newPost);
		};
		return { createPost, title, type };
	},
};
</script>

<style lang="scss" scoped></style>
