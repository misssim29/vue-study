<template>
	<div class="card" style="width: 18rem">
		<div v-if="$slots.header" class="card-header">
			<slot name="header" headerMsg="헤더 메세지">#Header</slot>
		</div>
		<div class="card-body">
			<slot :childMsg="childMsg" helloMsg="안녕하세요">#Body</slot>
		</div>
		<div v-if="hasFooter" class="card-footer text-muted">
			<slot name="footer">#Footer</slot>
		</div>
	</div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup(props, { slots }) {
		const childMsg = ref('자식 컴포넌트 메세지');
		const hasFooter = computed(() => !!slots.footer);
		return { childMsg, hasFooter };
	},
};
</script>

<style lang="sass" scoped></style>
