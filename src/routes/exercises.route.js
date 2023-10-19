import { Router } from 'express';
import {
	getExercises,
	createExercise
} from '../controllers/exercises.controllers.js';

const router = Router();

router.route('/').get(getExercises).post(createExercise);

export default router;
