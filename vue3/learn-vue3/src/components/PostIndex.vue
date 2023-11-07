<template>
	<main>
		<div class="container text-center py-4">
			<PostCreate @createPost="createPost"></PostCreate>
			<hr class="my-4" />
			<div class="row g-3">
				<div class="col col-4" v-for="post in posts" :key="post.id">
					<PostItem
						:title="post.title"
						:contents="post.contents"
						:type="post.type"
						:is-like="post.isLike"
						@toggleLike="post.isLike = !post.isLike"
					></PostItem>
				</div>
			</div>
			<hr class="my-4" />
			<LabelInput
				v-model="username"
				label="이름"
				class="parent-class"
				style="color: red"
				id="parend-id"
			></LabelInput>
		</div>
	</main>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue';
import LabelTitle from '@/components/LabelInput.vue';
import { reactive, ref } from 'vue';
import Username from './Username.vue';
export default {
	components: {
		PostItem,
		PostCreate,
		LabelInput,
		LabelTitle,
		Username,
	},
	setup() {
		const posts = reactive([
			{
				id: 1,
				title: '제목1',
				contents: '내용1',
				isLike: true,
				type: 'news',
			},
			{
				id: 2,
				title: '제목2',
				contents: '내용2',
				isLike: true,
				type: 'news',
			},
			{
				id: 3,
				title: '제목3',
				contents: '내용3',
				isLike: false,
				type: 'notice',
			},
			{
				id: 4,
				title: '제목4',
				contents: '내용4',
				isLike: false,
				type: 'news',
			},
			{
				id: 5,
				title: '제목5',
				contents: '내용5',
				isLike: true,
				type: 'notice',
			},
		]);
		const createPost = newPost => {
			console.log('createPost', newPost);
			posts.push(newPost);
		};
		const username = ref('');

		const firstname = ref('');
		const lastname = ref('');

		return { posts, createPost, username, firstname, lastname };
	},
};
</script>

<style lang="scss" scoped></style>
