<template>
	<div class="app">
		<ExerciseModal
			v-if="modals.exercise"
			:exercise="modals.exercise"
			@close="saveAndExitExerciseModal"
		/>
		<ImportModal
			v-if="modals.import"
			@cancel="closeModal('import')"
			@success="importProgram"
		/>
		<Toast
			v-if="modals.toast"
			:msg="modals.toast"
			@time-up="closeModal('toast', '')"
		/>

		<div class="header">
			<h1 class="header__title">
				Training X
				<span class="header__subtitle">v1.2.1</span>
			</h1>
			<div class="header__buttons">
				<button class="header__button" @click="copyProgramToClipboard">
					<span class="material-icons">copy_all</span>
				</button>
				<button class="header__button" @click="openModal('import')">
					<span class="material-icons">content_paste</span>
				</button>
			</div>
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
					@selected="openModal('exercise', exercise)"
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
			modals: {
				exercise: null,
				import: false,
				toast: '',
			},
		};
	},
	created() {
		const savedProgram = localStorage.getItem('program');
		if (!savedProgram) {
			return;
		}
		this.program = JSON.parse(savedProgram);
	},
	methods: {
		openModal(name, valueToPass = true) {
			this.modals[name] = valueToPass;
		},

		closeModal(name) {
			this.modals[name] = null;
		},

		saveAndExitExerciseModal() {
			this.closeModal('exercise');
			this.save();
		},

		displayToast(msg) {
			this.modals.toast = msg;
		},

		async copyProgramToClipboard() {
			try {
				await navigator.clipboard.writeText(
					programToText(this.program)
				);
				this.displayToast('Copied program to clipboard');
			} catch (err) {}
		},

		importProgram(program) {
			if (program) {
				this.program = program;
				this.save();
				this.displayToast('Program imported from clipboard');
			}
			this.closeModal('import');
		},

		save() {
			localStorage.setItem('program', JSON.stringify(this.program));
		},
	},
};
</script>

<style>
.app {
	overflow-x: hidden;
}

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

.header__button {
	padding: 0;
	margin-left: 16px;
	background: none;
	border: none;
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
