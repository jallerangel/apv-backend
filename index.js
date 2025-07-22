import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use('/', (req, res) => {
	res.send('Hello World!!!');
});

app.listen(4000, () => console.log('listen in 4000 port'));
