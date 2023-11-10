<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<PostFilter
			v-model:title="params.title_like"
			v-model:limit="params._limit"
			@update:limit="changeLimit"
		></PostFilter>
		<hr class="my-4" />

		<AppLoading v-if="loading" />
		<AppError v-else-if="error" :message="error.message" />

		<template v-else-if="!isExist">
			<p class="text-center py-5 text-muted">No Result</p>
		</template>
		<template v-else>
			<AppGrid colClass="col-4" :items="posts">
				<template v-slot="{ item }">
					<PostItem
						:title="item.title"
						:content="item.content"
						:createdAt="item.createdAt"
						@click="goPage(item.id)"
						@modal="openModal(item)"
						@preview="selectPreview(item.id)"
					></PostItem>
				</template>
			</AppGrid>
			<AppPagination
				:currentPage="params._page"
				:pageCount="pageCount"
				@page="page => (params._page = page)"
			></AppPagination>
		</template>
		<Teleport to="#modal">
			<PostModal
				v-model="show"
				:title="modalTitle"
				:content="modalContent"
				:createdAt="modalCreatedAt"
			/>
		</Teleport>
		<template v-if="previewId">
			<hr class="my-5" />
			<AppCard>
				<PostDetailView :id="previewId"></PostDetailView>
			</AppCard>
		</template>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import PostDetailView from './PostDetailView.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';
import { useAxios } from '@/hooks/useAxios.js';

const router = useRouter();

const previewId = ref(null);
const selectPreview = id => (previewId.value = id);

const params = ref({
	_limit: 3,
	_page: 1,
	_sort: 'createdAt',
	_order: 'desc',
	title_like: '',
});
const changeLimit = value => {
	params.value._limit = value;
	params.value._page = 1;
};
const {
	response,
	data: posts,
	error,
	loading,
} = useAxios('/posts', { method: 'get', params });

const isExist = computed(() => posts.value && posts.value.length > 0);

const totalCount = computed(() => response.value.headers['x-total-count']);
const pageCount = computed(() => {
	return Math.ceil(totalCount.value / params.value._limit);
});

// const fetchPosts = async () => {
// 	try {
// 		loading.value = true;
// 		const { data, headers } = await getPosts(params.value);
// 		posts.value = data;
// 		totalCount.value = headers['x-total-count'];
// 	} catch (err) {
// 		error.value = err;
// 	} finally {
// 		loading.value = false;
// 	}
// };
// watchEffect(fetchPosts);

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
const show = ref(false);
const openModal = ({ title, content, createdAt }) => {
	show.value = true;
	modalTitle.value = title;
	modalContent.value = content;
	modalCreatedAt.value = createdAt;
};

const modalTitle = ref('');
const modalContent = ref('');
const modalCreatedAt = ref('');
</script>

<style lang="scss" scoped></style>
