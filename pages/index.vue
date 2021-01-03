<template>
	<div class="app">
		<ExerciseModal
			v-if="exerciseInModal"
			:exercise="exerciseInModal"
			@save-and-exit="saveAndExitModal"
		/>

		<div class="header">
			<h1 class="header__title">Training X</h1>
		</div>

		<div class="program">
			<h2 class="program__name">{{ program.name }}</h2>

			<div
				v-for="(workout, i) in program.workouts"
				:key="i"
				class="workout"
			>
				<h3 class="workout__title">
					{{ workout.title }} ({{ workout.muscles.join(', ') }})
				</h3>

				<Exercise
					v-for="(exercise, j) in workout.exercises"
					:key="j"
					:exercise="exercise"
					@open-modal="openModal"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import program from '../assets/program';

export default {
	data() {
		return {
			program,
			exerciseInModal: null,
		};
	},
	methods: {
		openModal(exercise) {
			this.exerciseInModal = exercise;
		},

		saveAndExitModal() {
			this.exerciseInModal = null;

			// Save to local storage
		},
	},
};
</script>

<style>
.header {
	padding: 16px;
}

.header__title {
	font-size: 30px;
}

.program {
	padding: 16px;
	padding-top: 0;
}

.program__name {
	margin-bottom: 16px;
	font-size: 24px;
}

.workout {
	margin-bottom: 32px;
}

.workout:last-child {
	margin-bottom: 0;
}

.workout__title {
	margin-bottom: 8px;
	font-size: 18px;
}
</style>
