<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<div class="row">
			<div class="col-4" v-for="post in posts" :key="post">
				<PostItem
					:title="post.title"
					:content="post.content"
					:createdAt="post.createdAt"
					@click="goPage(post.id)"
				></PostItem>
			</div>
		</div>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { ref } from 'vue';
import { getPosts } from '@/api/post.js';
import { useRouter } from 'vue-router';

const posts = ref([]);
const fetchPosts = () => {
	posts.value = getPosts();
};
fetchPosts();
const router = useRouter();

const goPage = id => {
	// router.push(`/posts/${id}`);
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
		// query: {
		// 	searchText: 'hello',
		// },
		// hash: '#world',
	});
};
</script>

<style lang="scss" scoped></style>
