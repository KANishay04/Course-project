import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', formData);
            localStorage.setItem('token', response.data.token);
            alert('Login successful');
        } catch (error) {
            alert(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 text-gray-800 p-6">
            <h1 className="text-4xl font-bold text-indigo-600 mb-4">Login</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Your password"
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
