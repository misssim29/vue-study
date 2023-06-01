<template>
	<div>
		<list-item :start-spinner="StartSpinner"></list-item>
	</div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
export default {
	components:{
		ListItem
	},
}
</script>