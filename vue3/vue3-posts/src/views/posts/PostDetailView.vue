<template>
	<AppLoading v-if="loading" />
	<AppError v-else-if="error" :message="error.message" />
	<div v-else>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p class="text-muted">
			{{ $dayjs(post.createdAt).format('YYYY.MM.DD HH:mm:ss') }}
		</p>
		<hr class="my-4" />
		<AppError v-if="removeError" :message="removeError.message" />
		<div class="row g-2">
			<div class="col-auto">
				<button
					class="btn btn-outline-dark"
					@click="$router.push('/posts/19')"
				>
					이전글
				</button>
			</div>
			<div class="col-auto">
				<button
					class="btn btn-outline-dark"
					@click="$router.push('/posts/20')"
				>
					다음글
				</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">
					목록
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button
					class="btn btn-outline-danger"
					@click="remove"
					:disabled="removeLoading"
				>
					<template v-if="removeLoading">
						<span
							class="spinner-border spinner-border-sm"
							aria-hidden="true"
						></span>
						<span class="visually-hidden" role="status"
							>Loading...</span
						>
					</template>
					<template v-else>삭제</template>
				</button>
			</div>
		</div>
	</div>
</template>
<!-- <p>params : {{ $route.params }}</p>
		<p>query L {{ $route.query.searchText }}</p>
		<p>query L {{ $route.hash }}</p> -->

<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/post';
import { ref } from 'vue';
import { useAlert } from '@/hooks/alert';

const { vAlert, vSucess } = useAlert();

const props = defineProps({
	id: [Number, String],
});

const router = useRouter();

/**
 * ref
 * 장) 객체 할당 가능, 일관성
 * 단) post.value.title (value 붙여야해서 코드 길어짐)
 * reactive
 * 장) post.title
 * 단) 객체 할당 불가능
 */
const error = ref(null);
const loading = ref(false);
const post = ref({});

const fetchPost = async () => {
	try {
		loading.value = true;
		const { data } = await getPostById(props.id);
		setPost(data);
	} catch (err) {
		error.value = err;
	} finally {
		loading.value = false;
	}
};
const setPost = ({ title, content, createdAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
};

fetchPost();

const removeError = ref(null);
const removeLoading = ref(null);

const remove = async () => {
	try {
		removeLoading.value = true;
		if (confirm('삭제 하시겠습니까?')) {
			await deletePost(props.id);
			router.push({ name: 'PostList' });
			vSucess('삭제가 완료되었습니다.');
		}
	} catch (err) {
		removeError.value = err;
		vAlert(err.message);
	} finally {
		removeLoading.value = false;
	}
};

const goListPage = () => {
	router.push({ name: 'PostList' });
};
const goEditPage = () => {
	router.push({ name: 'PostEdit', params: { id: props.id } });
};

onBeforeRouteUpdate(() => {
	console.log('onBeforeRouteUpate');
});
onBeforeRouteLeave(() => {
	console.log('onBeforeRouteLeave');
});
</script>
<script>
export default {
	beforeRouteEnter() {
		console.log('beforeRouteEnter');
	},
};
</script>
<style lang="scss" scoped></style>
