<template>
	<AppLoading v-if="loading" />
	<AppError v-else-if="error" :message="error.message" />
	<div v-else>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<AppError v-if="editError" :message="editError.message" />
		<PostForm
			@submit.prevent="edit"
			v-model:title="form.title"
			v-model:content="form.content"
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-danger me-2"
					@click="goEditPage"
				>
					취소
				</button>
				<button
					class="btn btn-primary"
					type="submit"
					:disabled="editLoading"
				>
					<template v-if="editLoading">
						<span
							class="spinner-border spinner-border-sm"
							aria-hidden="true"
						></span>
						<span class="visually-hidden" role="status"
							>Loading...</span
						>
					</template>
					<template v-else>수정</template>
				</button>
			</template>
		</PostForm>
		<!-- <AppAlert
			:show="showAlert"
			:message="alertMessage"
			:type="alertType"
		></AppAlert> -->
	</div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { getPostById, updataPost } from '@/api/post';
import { ref } from 'vue';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/hooks/alert';
import { useAxios } from '@/hooks/useAxios.js';

const { vAlert, vSucess } = useAlert();

const router = useRouter();
const route = useRoute();
const id = route.params.id;
const error = ref(null);
const loading = ref(false);
const form = ref({
	title: null,
	content: null,
});

const fetchPost = async () => {
	try {
		loading.value = true;
		const { data } = await getPostById(id);
		setForm(data);
	} catch (err) {
		error.value = err;
	} finally {
		loading.value = false;
	}
};
const setForm = ({ title, content }) => {
	form.value.title = title;
	form.value.content = content;
};

const editError = ref(null);
const editLoading = ref(false);
const edit = async () => {
	try {
		editLoading.value = true;
		await updataPost(id, { ...form.value });
		router.push({ name: 'PostDetail', params: { id } });
		vSucess('수정이 완료되었습니다.');
	} catch (err) {
		editError.value = err;
		vAlert(err.message);
	} finally {
		editLoading.value = false;
	}
};

fetchPost();

const goEditPage = () => router.push({ name: 'PostDetail', params: { id } });
</script>

<style lang="scss" scoped></style>
