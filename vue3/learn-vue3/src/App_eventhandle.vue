<template>
	<div>
		<div id="modifiers">
			<!-- capture : 먼저 실행시키고싶을때 -->
			<div @click.capture="clickDiv">
				DIV 영역
				<p @click="clickP">
					P 영역
					<span @click="clickSpan">SPAN 영역</span>
					<a href="https://naver.com" @click.prevent.stop="clickA"
						>a 영역</a
					>
				</p>
			</div>
		</div>
		<!-- once : 한번만 작동 -->
		<button @click.once="clickDiv">once</button>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
		};
		const clickP = () => {
			console.log('clickP');
		};
		const clickSpan = e => {
			console.log('clickSpan');
			e.stopPropagation();
		};
		const clickA = () => {
			console.log('A');
		};
		return { clickDiv, clickP, clickSpan, clickA };
	},
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}
#modifiers div {
	background: #ccc;
}
#modifiers p {
	background: #aaa;
}
#modifiers span {
	background-color: #444;
}
</style>
