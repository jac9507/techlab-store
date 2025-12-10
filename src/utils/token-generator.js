import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

export function generateToken(userData) {
    return jwt.sign(userData, secret_key, { expiresIn: '1h' });
}
