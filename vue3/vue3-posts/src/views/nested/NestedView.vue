<template>
	<div>
		<ul class="nav nav-pills">
			<li class="nav-item">
				<RouterLink
					class="nav-link"
					active-class="active"
					:to="{ name: 'NestedOne', replace: true }"
				>
					Nested One
				</RouterLink>
			</li>
			<li class="nav-item">
				<RouterLink
					class="nav-link"
					active-class="active"
					:to="{ name: 'NestedTwo', replace: true }"
				>
					<!--RouterLink에서의 replace = 히스토리 스택을 쌓지 않아서 뒤로가기시 기록이없어 영향을 끼치지 않는다-->
					<!-- to="/nested/two" -->
					Nested Two
				</RouterLink>
			</li>
		</ul>
		<hr class="my-4" />
		<RouterView></RouterView>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
