<template>
	<main>
		<div class="container py-4">
			<MyButton
				@click="console.log('MyButton')"
				id="my-button"
				class="my-button"
			></MyButton>
		</div>
		<LabelInput label="이름"></LabelInput>
		<hr />
		<FancyButton>Click!</FancyButton>
		<FancyButton v-slot="{ fancyMessage }">{{ fancyMessage }}</FancyButton>
		<hr />
		<AppCard>
			<!--동적으로 slot변경방법-->
			<template #[slotArgs]>제목입니다.</template>
		</AppCard>
		<AppCard>
			<!--비동적으로 slot 적용방법-->
			<template #header="{ headerMsg }">
				제목입니다.{{ headerMsg }}
			</template>
			<template #default="{ childMsg, helloMsg }">
				{{ childMsg }}
				{{ helloMsg }}
				디폴트입니다.
			</template>
			<template #footer>하단입니다.</template>
		</AppCard>
		<hr />
		<AppCard> 게시글입니다. </AppCard>
	</main>
</template>

<script>
import AppCard from './AppCard.vue';
import FancyButton from './FancyButton.vue';
import LabelInput from './LabelInput.vue';
import MyButton from '@/components/MyButton.vue';
import { ref } from 'vue';

export default {
	setup() {
		const slotArgs = ref('header');

		return { slotArgs };
	},
	components: { MyButton, LabelInput, FancyButton, AppCard },
};
</script>

<style lang="scss" scoped></style>
