import mongoose, { Schema } from 'mongoose';

const ExerciseSchema = new Schema({});

export const Exercise = mongoose.model('Exercise', ExerciseSchema);
