<template>
	<Modal :title="`${exercise.name} Sets`" @close="$emit('close')">
		<div v-for="(set, i) in exercise.sets" :key="i" class="exr-modal__set">
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
	</Modal>
</template>

<script>
export default {
	props: {
		exercise: {
			type: Object,
			default: () => {},
		},
	},
};
</script>

<style>
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
