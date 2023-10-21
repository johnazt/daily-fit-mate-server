import mongoose, { Schema } from 'mongoose';

const ExerciseSchema = new Schema({
	name: String,
	description: String,
	intensity: String,
	duration: String
});

export const Exercise = mongoose.model('Exercise', ExerciseSchema);
