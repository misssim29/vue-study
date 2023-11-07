<template>
	<div class="card">
		<div class="card-body">
			<!-- {{ $props }} html쪽에선 이렇게 바로 접근가능 -->
			<span class="badge bg-secondary mt-2">{{ typeName }}</span>
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text">
				{{ contents }}
			</p>
			<a href="#" class="btn" :class="isLikeClass">좋아요</a>
			<button @click="toggleLike">토글</button>
		</div>
	</div>
</template>

<script>
console.log('Normal');
</script>
<script setup>
import { computed } from 'vue';

const props = defineProps({
	type: {
		type: String,
		default: 'news',
		//유효성검사
		validator: value => {
			return ['news', 'notice'].includes(value);
		},
	},
	title: {
		type: String,
		required: true,
	},
	contents: {
		type: String,
		// required: true,
	},
	isLike: {
		type: Boolean,
		default: false,
	},
	obj: {
		type: Object,
		default: () => {},
	},
});
const emit = defineEmits(['toggleLike']);
const isLikeClass = computed(() =>
	props.isLike ? 'btn-danger' : 'btn-outline-danger',
);
const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'));
const toggleLike = () => {
	emit('toggleLike');
};
</script>

<style lang="scss" scoped>
.card-text {
	color: $mainColor;
}
</style>
