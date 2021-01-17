<template>
	<div class="app">
		<Header />

		<Modal
			v-if="modals.instructions"
			:title="`${capitalise(modals.instructions.exercise)} Instructions`"
			@close="closeModal('instructions')"
		>
			<ol class="instructions">
				<li
					v-for="(instruction, i) in modals.instructions.execution"
					:key="`instruction-${i + 1}`"
					class="instructions__point"
				>
					{{ instruction }}
				</li>
			</ol>

			<span class="instructions__subheading">Purpose</span>
			<p class="instructions__purpose">
				{{ modals.instructions.purpose }}
			</p>
		</Modal>

		<div class="body-parts">
			<h2 class="body-parts__title">Instructions</h2>

			<div
				v-for="muscleGroup in exercisesByMuscle"
				:key="muscleGroup.muscle"
				class="body-parts__group"
			>
				<h3 class="body-parts__muscle">{{ muscleGroup.muscle }}</h3>

				<div
					v-for="exercise in muscleGroup.exercises"
					:key="exercise.name"
					class="body-parts__exercise"
					@click="openModal('instructions', exercise)"
				>
					<span class="body-parts__name"
						>{{ capitalise(exercise.exercise) }}
					</span>

					<p class="body-parts__purpose">
						{{ firstSentence(exercise.purpose) }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import exerciseDb from '../assets/exercise-db';

export default {
	data() {
		return {
			exerciseDb,
			modals: {
				instructions: null,
			},
		};
	},
	computed: {
		exercisesByMuscle() {
			const muscles = [];
			this.exerciseDb.forEach(exercise => {
				const muscleGroup = muscles.find(
					({ muscle }) => muscle === exercise.muscle
				);

				const exerciseCopy = { ...exercise };
				delete exerciseCopy.muscle;

				if (!muscleGroup) {
					muscles.push({
						muscle: exercise.muscle,
						exercises: [exerciseCopy],
					});
				} else {
					muscleGroup.exercises.push(exerciseCopy);
				}
			});

			muscles.sort((a, b) => this.alphabeticalSort(a, b, 'muscle'));

			muscles.forEach(({ exercises }) => {
				exercises.sort((a, b) =>
					this.alphabeticalSort(a, b, 'exercise')
				);
			});

			return muscles;
		},
	},
	methods: {
		openModal(name, valueToPass = true) {
			this.modals[name] = valueToPass;
		},

		closeModal(name) {
			this.modals[name] = null;
		},

		capitalise(string) {
			const lower = string.toLowerCase();
			return lower
				.split(' ')
				.map(word => word[0].toUpperCase() + word.slice(1))
				.join(' ');
		},

		firstSentence(paragraph) {
			return paragraph.split('. ')[0] + '.';
		},

		alphabeticalSort(a, b, prop) {
			if (a[prop] < b[prop]) {
				return -1;
			} else if (a[prop] > b[prop]) {
				return 1;
			} else {
				return 0;
			}
		},
	},
};
</script>

<style>
.body-parts {
	padding: 16px;
	padding-top: 0;
}

.body-parts__title {
	margin-bottom: 16px;
}

.body-parts__group {
	margin-bottom: 32px;
}

.body-parts__muscle {
	margin-bottom: 24px;
	font-size: 20px;
}

.body-parts__exercise {
	padding-bottom: 12px;
	margin-bottom: 12px;
	border-bottom: 1px solid #373737;
}

.body-parts__exercise:last-child {
	border-bottom: none;
}

.body-parts__name {
	margin-bottom: 8px;
	display: block;
	font-size: 20px;
}

.instructions {
	padding-left: 16px;
	margin-bottom: 32px;
}

.instructions__point {
	margin-bottom: 16px;
}

.instructions__point:last-child {
	margin-bottom: 0;
}

.instructions__subheading {
	margin-bottom: 8px;
	display: block;
	font-size: 20px;
}
</style>
