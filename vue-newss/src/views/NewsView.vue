<template>
	<div>
		<ul class="new-list">
			<li v-for="item in News" :key="item" class="post">
				<!-- 포인트영역 -->
				<div class="points">
					{{ item.points }}
				</div>
				<!-- 기타 전보 영역 -->
				<div>
					<p class="news-title">
						{{ item.title }}
					</p>
					<small class="link-text">
						{{ item.time_ago }} by <router-link :to="'/user/'+item.user">{{ item.user }}</router-link>
					</small>
				</div>
				<!-- <a :href="item.url">
					{{ item.title }}
				</a>
				<small>{{ item.time_ago }} by 
					<router-link :to="'/user/'+item.user">{{ item.user }}</router-link>
				</small> -->
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	computed:{
		...mapState({
		News : 'news' 
		})
	},
	created(){
		this.$store.dispatch('FETCH_NEWS');
	}
}
</script>

<style scoped>
	.news-lise{margin:0;padding:0}
	.post{list-style:none; display: flex; align-items: center; border-bottom:1px solid #eee;}
	.points{
		width: 80px;
		height: 60px;
		display: flex;
		align-items: center;
		color: #42b883;
	}
	.news-title{margin:0}
	.link-text{color:#828282}
	.link-text a{color:#828282; text-decoration: none;}
	.link-text a:hover{color:#000; text-decoration: underline;}
</style>