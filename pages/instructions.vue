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
			<div
				v-for="exercise in exerciseDb"
				:key="exercise.name"
				class="body-parts__exercise"
				@click="openModal('instructions', exercise)"
			>
				<div class="body-parts__header">
					<span class="body-parts__name"
						>{{ capitalise(exercise.exercise) }}
					</span>
					<span class="body-parts__muscle">{{
						exercise.muscle
					}}</span>
				</div>

				<p class="body-parts__purpose">
					{{ firstSentence(exercise.purpose) }}
				</p>
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
	},
};
</script>

<style>
.body-parts {
	padding: 16px;
}

.body-parts__exercise {
	padding-bottom: 16px;
	margin-bottom: 16px;
	border-bottom: 1px solid #373737;
}

.body-parts__exercise:last-child {
	padding-bottom: 0;
	margin-bottom: 0;
	border-bottom: none;
}

.body-parts__header {
	margin-bottom: 8px;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
}

.body-parts__name {
	font-size: 20px;
}

.body-parts__muscle {
	font-size: 14px;
	font-style: italic;
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
