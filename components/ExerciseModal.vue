<template>
	<div class="exr-modal" @click.self="saveAndExit">
		<div class="exr-modal__box">
			<span class="exr-modal__title">{{ exercise.name }} Sets</span>

			<div
				v-for="(set, i) in exercise.sets"
				:key="i"
				class="exr-modal__set"
			>
				<span class="exr-modal__index">{{ i + 1 }}</span>

				<div class="exr-modal__group">
					<input
						v-model="set.reps"
						type="number"
						class="exr-modal__input"
						placeholder="Enter reps..."
					/>
					<span class="exr-modal__label">reps</span>
					<input
						v-model="set.weight"
						type="number"
						class="exr-modal__input"
						placeholder="Enter weight..."
					/>
					<span class="exr-modal__label">kg</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		exercise: {
			type: Object,
			default: () => {},
		},
	},
	methods: {
		saveAndExit() {
			this.$emit('save-and-exit');
		},
	},
};
</script>

<style>
.exr-modal {
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

.exr-modal__box {
	width: 80%;
	padding: 24px;
	z-index: 2;
	background: #373737;
	border-radius: 4px;
}

.exr-modal__title {
	margin-bottom: 8px;
	display: block;
	font-size: 20px;
	font-weight: bold;
}

.exr-modal__set {
	margin-bottom: 16px;
}

.exr-modal__set:last-child {
	margin-bottom: 0;
}

.exr-modal__index {
	display: block;
	margin-bottom: 8px;
}

.exr-modal__group {
	display: grid;
	grid-template-columns: 1fr auto 1fr auto;
	align-items: center;
}

.exr-modal__label {
	margin: 0 8px;
}

.exr-modal__label:last-child {
	margin-right: 0;
}

.exr-modal__input {
	width: 100%;
	padding: 4px;
	border: none;
	border-radius: 4px;
	color: black;
	font-size: 18px;
	text-align: right;
}
</style>
