import express from 'express';
import {
	login,
	resgister,
	veterinarianHome,
} from '../controllers/veterinarianController.js';
const router = express.Router();

router.get('/', veterinarianHome);
router.get('/register', resgister);
router.get('/login', login);
export default router;
