<template>
	<div>
		<the-nav></the-nav>
		<the-view></the-view>
	</div>
</template>

<script>
import TheNav from './components/TheNav.vue';
import TheView from './components/TheView.vue';
export default {
	components: {
		TheNav,
		TheView,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss">
@import '@/css/base.scss';
</style>
