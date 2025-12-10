import { generateToken } from '../utils/token-generator.js';

const default_user = {
    id: 1,
    email: 'user@email.com',
    password: 'strongPass123'
};

export async function loginController(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: 'Credenciales obligatorias' });

        const isValid = email === default_user.email && password === default_user.password;
        if (!isValid) return res.status(401).json({ message: 'Credenciales inválidas' });

        const token = generateToken({ id: default_user.id, email });
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Error en login', error: err.message });
    }
}
