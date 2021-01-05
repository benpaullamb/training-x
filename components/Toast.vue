<template>
	<div class="toast">
		<div class="toast__box">
			<span class="toast__msg">{{ msg }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		msg: {
			type: String,
			default: '',
			required: true,
		},
		showTime: {
			type: Number,
			default: 2,
			required: false,
		},
	},
	data() {
		return {
			timer: null,
		};
	},
	mounted() {
		this.timer = setTimeout(() => {
			this.$emit('time-up');
		}, this.showTime * 1000);
	},
};
</script>

<style>
.toast {
	width: 100%;
	height: fit-content;
	position: fixed;
	bottom: 32px;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}

.toast__box {
	padding: 8px;
	border-radius: 4px;
	background: #1b1b1b;
}
</style>
