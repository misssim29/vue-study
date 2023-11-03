<template>
	<div>
		<form action="" @submit.prevent="save(title, contents)">
			<input type="text" v-model.lazy="title" placeholder="title" />
			<textarea v-model="contents" placeholder="contents"></textarea>
			<br />
			<button>저장</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const contents = ref('');
		const save = (title, contents) => {
			console.log(
				`저장되었습니다 title : ${title} , content : ${contents}`,
			);
		};
		//watchEffect는 최초로 한번 호출한다.
		watchEffect(() => {
			console.log('watchEffect');
			save(title.value, contents.value);
		});

		return { title, contents, save };
	},
};
</script>

<style lang="scss" scoped></style>
