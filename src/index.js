import exercisesRoute from './routes/exercises.route.js';
import errPageNotFound from './errors/pageNotFound.js';
import express from 'express';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(errPageNotFound);
app.use('/api/v1/exercises', exercisesRoute);

app.listen(PORT, () => console.log(`server is listening in PORT: ${PORT}`));
