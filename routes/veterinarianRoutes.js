import express from 'express';
import {
	login,
	resgister,
	veterinarianHome,
	perfil,
} from '../controllers/veterinarianController.js';
const router = express.Router();

router.get('/', veterinarianHome);
router.post('/register', resgister);
router.post('/login', login);
router.get('/perfil', perfil);
export default router;
