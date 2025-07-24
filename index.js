import express from 'express';
import 'dotenv/config';
import connection from './config/db.js';
import veterinarianRoutes from './routes/veterinarianRoutes.js';

const PORT = process.env.PORT || 4000;
const app = express();
connection();

app.use('/api/veterinarian', veterinarianRoutes);

app.listen(PORT, () => {
	console.log(`listen in ${PORT} port`);
});
