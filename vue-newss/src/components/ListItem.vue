<template>
    <div>
        <ul class="news-list">
			<li v-for="item in ListArr" :key="item" class="post">
				<!-- 포인트영역 -->
				<div class="points">
					{{ item.points || 0 }}
				</div>
				<!-- 기타 전보 영역 -->
				<div>
					<p class="news-title">
                        <router-link :to="'item/'+item.id" v-if="param == 'ask'">
							{{ item.title }}
						</router-link>
						<a :href="item.url" v-else>
							{{ item.title }}
						</a>
					</p>
                    <small class="link-text">
                        <template  v-if="item.domain">{{ item.time_ago }} from {{ item.domain }}</template>
						<template v-else>{{ item.time_ago }} by <router-link :to="'/user/'+item.user">{{ item.user }}</router-link></template>
					</small>
				</div>
			</li>
		</ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            param : ''
        }
    },
	computed:{
		...mapState({
		ListArr : 'listdata'
		}),
	},
	created(){
        this.RouteChange();
	},
    watch:{
        $route(to,from){
            if(to.path != from.path){
                this.RouteChange();
            }
        }
    },
    methods:{
        RouteChange(){
            this.param = this.$route.name;
            this.$store.dispatch('FETCH_List',this.$route.name);
        }
    }
}
</script>

<style scoped>
	.news-list{margin:0;padding:0}
	.post{list-style:none; display: flex; align-items: center; border-bottom:1px solid #eee;}
	.points{
		width: 80px;
		height: 60px;
		display: flex;
		align-items: center;
		color: #42b883;
		justify-content: center;
	}
	.news-title{margin:0}
	.link-text{color:#828282}
	.news-list a{text-decoration: none;}
	.news-title a{color:#222;}
	.news-list .link-text a{color:#828282;}
	.news-list a:hover{color:#42b883; text-decoration: underline;}

</style>