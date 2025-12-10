import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

export function authentication(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ message: 'Token no provisto' });

    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({ message: 'Formato de token inválido' });
    }

    const token = parts[1];
    jwt.verify(token, secret_key, (err) => {
        if (err) return res.status(403).json({ message: 'Token inválido o expirado' });
        next();
    });
}

