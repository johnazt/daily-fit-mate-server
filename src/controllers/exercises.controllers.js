import asyncWrapper from '../middlewares/async.js';
import { Exercise } from '../models/exercise.model.js';

const getExercises = asyncWrapper(async (req, res) => {
	const exercises = await Exercise.find();
	res.status(200).json({ status: 'success', data: exercises });
});

const createExercise = asyncWrapper((req, res) => {
	res.send('<h3>Exercise created</h3>');
});

export { getExercises, createExercise };
