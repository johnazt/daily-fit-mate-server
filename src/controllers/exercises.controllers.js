import asyncWrapper from '../middlewares/async.js';

const getExercises = asyncWrapper((req, res) => {
	res.status(200).json({
		status: 'success',
		data: [
			{
				futuredat: 'hola'
			}
		]
	});
});

const createExercise = asyncWrapper((req, res) => {
	res.send('<h3>Exercise created</h3>');
});

export { getExercises, createExercise };
