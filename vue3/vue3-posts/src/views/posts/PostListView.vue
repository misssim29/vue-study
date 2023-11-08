<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<PostFilter
			v-model:title="params.title_like"
			v-model:limit="params._limit"
		></PostFilter>
		<hr class="my-4" />
		<AppGrid colClass="col-4" :items="posts">
			<template v-slot="{ item }">
				<PostItem
					:title="item.title"
					:content="item.content"
					:createdAt="item.createdAt"
					@click="goPage(item.id)"
				></PostItem>
			</template>
		</AppGrid>
		<AppPagination
			:currentPage="params._page"
			:pageCount="pageCount"
			@page="page => (params._page = page)"
		></AppPagination>
		<template v-if="posts && posts.length > 0">
			<hr class="my-5" />
			<AppCard>
				<PostDetailView :id="1"></PostDetailView>
			</AppCard>
		</template>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { ref, computed, watchEffect } from 'vue';
import { getPosts } from '@/api/post.js';
import { useRouter } from 'vue-router';
import AppCard from '@/components/AppCard.vue';
import PostDetailView from './PostDetailView.vue';
import AppPagination from '@/components/AppPagination.vue';
import AppGrid from '@/components/AppGrid.vue';
import PostFilter from '@/components/posts/PostFilter.vue';

const router = useRouter();
const posts = ref([]);
const params = ref({
	_limit: 3,
	_page: 1,
	_sort: 'createdAt',
	_order: 'desc',
	title_like: '',
});
const totalCount = ref(0);
const pageCount = computed(() => {
	return Math.ceil(totalCount.value / params.value._limit);
});

const fetchPosts = async () => {
	try {
		const { data, headers } = await getPosts(params.value);
		posts.value = data;
		totalCount.value = headers['x-total-count'];
	} catch (error) {
		console.log(error);
	}
};
watchEffect(fetchPosts);

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
