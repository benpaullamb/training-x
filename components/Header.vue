<template>
	<div class="header">
		<div class="header__main">
			<h1 class="header__title">
				Training X
				<span class="header__subtitle">v1.4.0</span>
			</h1>
			<div class="header__buttons">
				<slot name="buttons"></slot>
			</div>
		</div>

		<div class="header__links">
			<NuxtLink to="/" class="header__link">Home</NuxtLink>
			<NuxtLink to="/instructions" class="header__link"
				>Instructions</NuxtLink
			>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.header {
	padding: 16px;
}

.header__main {
	margin-bottom: 8px;
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;
}

.header__title {
	font-size: 30px;
}

.header__subtitle {
	font-size: 20px;
}

.header__link {
	margin-right: 8px;
}
</style>
