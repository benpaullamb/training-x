import { DateTime } from 'luxon';

export function programToText(program) {
	let text = '';
	text += `${program.name} - ${DateTime.local().toFormat('dd/LL/yyyy')}\n\n`;

	program.workouts.forEach(workout => {
		text += `${workout.title} (${workout.muscles.join(', ')})\n`;

		workout.exercises.forEach(exercise => {
			text += `${exercise.name}: `;
			const sets = exercise.sets.map(set => {
				if (!set.weight) {
					return `${set.reps}`;
				}
				return `${set.reps}x${set.weight}kg`;
			});

			const allSame = sets.every(set => set === sets[0]);

			if (allSame) {
				text += `${sets.length}x${sets[0]}\n`;
			} else {
				text += `${sets.join(', ')}\n`;
			}
		});

		text += '\n';
	});

	return text;
}
