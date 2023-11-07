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
import { computed } from 'vue';
export default {
	//객체타입의로 props 주기
	props: {
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
	},
	emit: ['toggleLike'],
	//setup에서 props는 이렇게 가져올수있음
	setup(props, context) {
		const isLikeClass = computed(() =>
			props.isLike ? 'btn-danger' : 'btn-outline-danger',
		);
		const typeName = computed(() =>
			props.type === 'news' ? '뉴스' : '공지사항',
		);
		const toggleLike = () => {
			context.emit('toggleLike');
		};
		return { isLikeClass, typeName, toggleLike };
	},
};
</script>

<style lang="scss" scoped>
.card-text {
	color: $mainColor;
}
</style>
