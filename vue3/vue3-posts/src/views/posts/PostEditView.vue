<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
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
				<button type="submit" class="btn btn-primary">수정</button>
			</template>
		</PostForm>
		<!-- <AppAlert
			:show="showAlert"
			:message="alertMessage"
			:type="alertType"
		></AppAlert> -->
		<AppAlert :items="alerts"></AppAlert>
	</div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { getPostById, updataPost } from '@/api/post';
import { ref } from 'vue';
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const form = ref({
	title: null,
	content: null,
});
const fetchPost = async () => {
	try {
		const { data } = await getPostById(id);
		setForm(data);
	} catch (error) {
		console.error(error);
		vAlert(error.message);
	}
};
const setForm = ({ title, content }) => {
	form.value.title = title;
	form.value.content = content;
};
const edit = async () => {
	try {
		await updataPost(id, { ...form.value });
		// router.push({ name: 'PostDetail', params: { id } });\
		vAlert('수정이 완료되었습니다.', 'success');
	} catch (error) {
		console.error(error);
		vAlert(error.message);
	}
};

fetchPost();

const goEditPage = () => router.push({ name: 'PostDetail', params: { id } });

//alert
// const showAlert = ref(false);
// const alertMessage = ref('');
// const alertType = ref('');t
const alerts = ref([]);
const vAlert = (message, type = 'error') => {
	alerts.value.push({ message, type });
	// showAlert.value = true;
	// alertMessage.value = message;
	// alertType.value = type;
	setTimeout(() => {
		// showAlert.value = false;
		alerts.value.shift();
	}, 3000);
};
</script>

<style lang="scss" scoped></style>
