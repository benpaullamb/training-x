<template>
	<div class="app">
		<ExerciseModal
			v-if="exerciseInModal"
			:exercise="exerciseInModal"
			@save-and-exit="saveAndExitModal"
		/>
		<Toast v-if="toastMsg" :msg="toastMsg" @time-up="hideToast" />

		<div class="header">
			<h1 class="header__title">
				Training X
				<span class="header__subtitle">v1.1.0</span>
			</h1>
			<span class="material-icons" @click="copyProgramToClipboard"
				>copy_all</span
			>
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
import { programToText } from '../assets/utils';

export default {
	data() {
		return {
			program,
			exerciseInModal: null,
			toastMsg: '',
		};
	},
	created() {
		const savedProgram = localStorage.getItem('program');
		if (!savedProgram) return;
		this.program = JSON.parse(savedProgram);
	},
	methods: {
		openModal(exercise) {
			this.exerciseInModal = exercise;
		},

		saveAndExitModal() {
			this.exerciseInModal = null;

			localStorage.setItem('program', JSON.stringify(this.program));
		},

		async copyProgramToClipboard() {
			try {
				await navigator.clipboard.writeText(
					programToText(this.program)
				);
				this.displayToast('Copied program to clipboard');
			} catch (err) {}
		},

		displayToast(msg) {
			this.toastMsg = msg;
		},

		hideToast() {
			this.toastMsg = '';
		},
	},
};
</script>

<style>
.header {
	padding: 16px;
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
