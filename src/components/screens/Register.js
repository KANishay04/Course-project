import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', formData);
            alert(response.data.message);
        } catch (error) {
            alert(error.response?.data?.message || 'Ошибка регистрации');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" placeholder="Имя пользователя" onChange={handleChange} />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Пароль" onChange={handleChange} />
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default Register;
