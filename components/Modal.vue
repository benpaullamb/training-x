<template>
	<div class="modal" @click.self="$emit('close')">
		<div class="modal__box">
			<span class="modal__title">{{ title }}</span>

			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Untitled Modal',
		},
	},
};
</script>

<style>
.modal {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	background: rgba(55, 55, 55, 0.5);
}

.modal__box {
	width: 90%;
	padding: 24px;
	z-index: 2;
	background: #373737;
	border-radius: 4px;
}

.modal__title {
	margin-bottom: 16px;
	display: block;
	font-size: 20px;
	font-weight: bold;
}
</style>
