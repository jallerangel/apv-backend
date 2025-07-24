import mongoose from 'mongoose';
import Veterinarian from '../models/veterinarianModel.js';

const veterinarianHome = (req, res) => {
	res.json({ msg: 'Veterinarian Home' });
};

const resgister = async (req, res) => {
	const { email, name, password, phone, web } = req.body;

	const userExists = await Veterinarian.findOne({ email });

	if (userExists) {
		const error = new Error('Usuario ya registrado');
		return res.status(400).json({ msg: error.message });
	}

	try {
		const veterinarian = new Veterinarian(req.body);
		console.log(veterinarian);
		const savedVeterinarian = await veterinarian.save();
		res.json(savedVeterinarian);
	} catch (e) {
		res.json({ error: `Ha habido un error al crear el usuario: ${e.message}` });
		console.log(e);
	}
};

const login = (req, res) => {
	res.json({ msg: 'Veterinarian Login' });
};

const perfil = (req, res) => {
	res.json({ msg: 'Veterinarian Perfil' });
};

export { veterinarianHome, resgister, login, perfil };
