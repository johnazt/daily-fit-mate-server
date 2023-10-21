import mongoose from 'mongoose';

const connectingDB = url => {
	return mongoose
		.connect(url)
		.then(() => console.log('connect to DB'))
		.catch(err => console.log(err));
};

export default connectingDB;
