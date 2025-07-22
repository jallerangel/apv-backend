import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

const connection = async () => {
	try {
		const db = await mongoose.connect(MONGO_URI, {});

		const url = `${db.connection.host}.${db.connection.port}`;
		console.log(`MongoDB Connected in: ${url}`);
	} catch (e) {
		console.log(`error: ${e.message}`);
		process.exit(1);
	}
};

export default connection;
