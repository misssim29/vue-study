<template>
	<div>
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<AppError v-if="error" :message="error.message" />
		<PostForm
			v-else
			@submit.prevent="save"
			v-model:title="form.title"
			v-model:content="form.content"
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-dark me-2"
					@click="goListPage"
				>
					목록
				</button>
				<button
					class="btn btn-primary"
					type="submit"
					:disabled="loading"
				>
					<template v-if="loading">
						<span
							class="spinner-border spinner-border-sm"
							aria-hidden="true"
						></span>
						<span class="visually-hidden" role="status"
							>Loading...</span
						>
					</template>
					<template v-else>저장</template>
				</button>
			</template>
		</PostForm>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/post';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/hooks/alert';
import { useAxios } from '@/hooks/useAxios.js';

const { vAlert, vSucess } = useAlert();
const router = useRouter();
const form = ref({
	title: null,
	content: null,
});

const { error, loading, execute } = useAxios(
	'/posts',
	{
		method: 'post',
		data: { ...form.value, createdAt: Date.now() },
	},
	{
		immediate: false,
		onSuccess: () => {
			router.push({ name: 'PostList' });
			vSucess('등록이 완료되었습니다.');
		},
		onError: err => {
			vAlert(err.message);
		},
	},
);
const save = async () => {
	execute({ ...form.value, createdAt: Date.now() });
};
// const save = async () => {
// 	try {
// 		loading.value = true;
// 		await createPost({
// 			...form.value,
// 			createdAt: Date.now(),
// 		});
// 		router.push({ name: 'PostList' });
// 		vSucess('등록이 완료되었습니다.');
// 	} catch (err) {
// 		error.value = err;
// 		vAlert(err.message);
// 	} finally {
// 		loading.value = false;
// 	}
// };
const goListPage = () => router.push({ name: 'PostList' });
</script>

<style lang="scss" scoped></style>
