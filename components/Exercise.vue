<template>
	<div class="exercise" @click="selected">
		<span class="exercise__name">{{ exercise.name }}</span>

		<div class="exercise__sets">
			<div
				class="exercise__row"
				:style="{
					'grid-template-columns': `repeat(${exercise.sets.length}, 1fr)`,
				}"
			>
				<span v-for="(rep, i) in reps" :key="i" class="exercise__num">{{
					rep
				}}</span>
			</div>

			<div
				v-if="!isBodyweight"
				class="exercise__row"
				:style="{
					'grid-template-columns': `repeat(${exercise.sets.length}, 1fr)`,
				}"
			>
				<span
					v-for="(weight, i) in weights"
					:key="i"
					class="exercise__num"
					>{{ weight }}</span
				>
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
	computed: {
		reps() {
			return this.exercise.sets.map(set => set.reps);
		},

		weights() {
			return this.exercise.sets.map(set => set.weight + 'kg');
		},

		isBodyweight() {
			return this.weights.every(weight => weight === '0kg');
		},
	},
	methods: {
		selected() {
			this.$emit('selected', this.exercise);
		},
	},
};
</script>

<style>
.exercise {
	margin-bottom: 4px;
}

.exercise__name {
	display: block;
	font-size: 18px;
}

.exercise__sets {
	width: fit-content;
	padding-bottom: 4px;
	border-bottom: 1px solid #373737;
}

.exercise__row {
	display: grid;
}

.exercise__num {
	margin-right: 16px;
}

.exercise__num:last-child {
	margin-right: 0;
}
</style>
