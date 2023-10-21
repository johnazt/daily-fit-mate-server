import exercisesRoute from './routes/exercises.route.js';
import errPageNotFound from './errors/pageNotFound.js';
import express from 'express';
import cors from 'cors';
import connectingDB from './db/connectdb.js';
import { config } from 'dotenv';
config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use('/api/v1/exercises', exercisesRoute);
app.use(errPageNotFound);

const start = async () => {
	try {
		await connectingDB(process.env.MONGODB_URI);
		app.listen(PORT, () => console.log(`server is listening in PORT: ${PORT}`));
	} catch (error) {
		console.log(error);
	}
};

start();
