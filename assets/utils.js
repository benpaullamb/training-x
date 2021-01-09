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

export function programFromText(text) {
	const program = {
		workouts: [],
	};

	try {
		const lines = text.split('\n');

		// Program name
		program.name = lines[0].split(' - ')[0];

		let nextIsWorkoutTitle = false;
		let curWorkoutTitle = '';
		let nextIsExercise = false;

		lines.forEach(line => {
			if (line === '') {
				nextIsWorkoutTitle = true;
				nextIsExercise = false;
			} else if (nextIsWorkoutTitle) {
				const items = line.split(' (');
				// Muscles
				const muscles = items[1].replace(')', '').split(', ');

				// Workout
				program.workouts.push({
					title: items[0],
					muscles,
					exercises: [],
				});

				curWorkoutTitle = items[0];
				nextIsWorkoutTitle = false;
				nextIsExercise = true;
			} else if (nextIsExercise) {
				const workout = program.workouts.find(
					({ title }) => title === curWorkoutTitle
				);

				// Exercise
				workout.exercises.push(getExerciseFromText(line));
			}
		});
	} catch (err) {
		console.error('Error parsing imported program');
		console.error(err.message);
		return null;
	}

	return program;
}

export function getExerciseFromText(text) {
	const items = text.split(': ');

	// Sets
	let sets = [];
	if (!items[1].includes(',')) {
		sets = getSetsFromShorthand(items[1]);
	} else {
		sets = getSetsFromText(items[1]);
	}

	return {
		name: items[0],
		sets,
	};
}

export function getSetsFromShorthand(shorthand) {
	const sets = [];

	const values = shorthand
		.replace('kg', '')
		.split('x')
		.map(num => Number(num));

	// For exercises that use shorthand with no weight
	if (values.length === 2) {
		values.push(0);
	}

	for (let i = 0; i < values[0]; ++i) {
		sets.push({
			reps: values[1],
			weight: values[2],
		});
	}

	return sets;
}

export function getSetsFromText(text) {
	return text.split(', ').map(set => {
		let values = [];
		if (set.includes('x')) {
			// Normal set
			values = set
				.replace('kg', '')
				.split('x')
				.map(value => Number(value));
		} else {
			// Set without weights
			values = [Number(set), 0];
		}

		return {
			reps: values[0],
			weight: values[1],
		};
	});
}
