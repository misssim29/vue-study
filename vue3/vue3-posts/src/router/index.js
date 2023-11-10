import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOne from '@/views/nested/NestedOne.vue';
import NestedTwo from '@/views/nested/NestedTwo.vue';
import NestedHome from '@/views/nested/NestedHome.vue';
import MyPage from '@/views/myPage.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		component: AboutView,
	},
	{
		path: '/posts',
		name: 'PostList',
		component: PostListView,
	},
	{
		path: '/posts/create',
		name: 'PostCreate',
		component: PostCreateView,
	},
	{
		path: '/posts/:id',
		name: 'PostDetail',
		component: PostDetailView,
		// props: true,
		props: route => {
			return {
				id: parseInt(route.params.id),
			};
		},
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEdit',
		component: PostEditView,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},
	{
		path: '/nested',
		name: 'Nested',
		component: NestedView,
		children: [
			{
				path: '',
				name: 'NestedHome',
				component: NestedHome,
			},
			{
				path: 'one',
				name: 'NestedOne',
				component: NestedOne,
			},
			{
				path: 'two',
				name: 'NestedTwo',
				component: NestedTwo,
			},
		],
	},
	{
		path: '/my',
		name: 'MyPage',
		component: MyPage,
		beforeEnter: (to, from) => {
			// console.log(to);
			// console.log(from);
			// return { name: 'home' };
			// next();
			console.log(to.query);
			if (Object.keys(to.query).length > 0) {
				return { path: to.path, query: {} };
			}
		},
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});
// router.beforeEach((to, from) => {
// 	console.log('to:', to);
// 	console.log('from:', from);
// 	if (to.name === 'MyPage') {
// 		// return false;
// 		return { name: 'home' };
// 	}
// });

export default router;
