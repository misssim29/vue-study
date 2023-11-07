<template>
	<header>
		<nav class="navbar navbar-expand-sm bg-primary navbar-dark">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Vue3</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div
					class="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul class="navbar-nav me-auto">
						<li class="nav-item">
							<RouterLink
								class="nav-link"
								active-class="active"
								aria-current="page"
								to="/"
								>Home</RouterLink
							>
						</li>
						<li class="nav-item">
							<RouterLink
								class="nav-link"
								active-class="active"
								aria-current="page"
								to="/about"
								>About</RouterLink
							>
						</li>
						<li class="nav-item">
							<RouterLink
								class="nav-link"
								to="/posts"
								active-class="active"
							>
								게시글
							</RouterLink>
						</li>
						<li class="nav-item">
							<RouterLink
								class="nav-link"
								to="/nested"
								active-class="active"
							>
								Nested
							</RouterLink>
						</li>
					</ul>
					<form class="d-flex" role="search">
						<button
							class="btn btn-outline-light"
							type="button"
							@click="goPage"
						>
							글쓰기
						</button>
					</form>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goPage = () => {
	router.push('/posts/create');
};
</script>

<style lang="scss" scoped></style>
