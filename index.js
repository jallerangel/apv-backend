import express from 'express';
import 'dotenv/config';

import connection from './config/db.js';
const app = express();
connection();

app.use('/', (req, res) => {
	res.send('Hello World!!!');
});

app.listen(4000, () => {
	console.log('listen in 4000 port');
});
