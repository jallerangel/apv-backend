const veterinarianHome = (req, res) => {
	res.send('Veterinarian Home');
};
const resgister = (req, res) => {
	res.send('Register');
};

const login = (req, res) => {
	res.send('login');
};

export { veterinarianHome, resgister, login };
