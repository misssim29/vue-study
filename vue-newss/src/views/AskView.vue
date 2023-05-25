<template>
	<div>
		<p v-for="item in askItems">
			<a v-bind:href="item.url">
				{{ item.title }}
			</a>
			<small>{{ item.time_ago }} by
				<router-link v-bind:to="'/item/'+item.user">{{ item.user }}</router-link>
			</small>
		</p>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
	computed:{
		...mapGetters({
			askItems : 'fetchedAsk'
		})
	},
	created(){
		this.$store.dispatch('FETCH_ASK');
	}
	}
</script>

<style>

</style>