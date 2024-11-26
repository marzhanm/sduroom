import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="App-header">
            {/* Header */}
            <header className="w-full h-16 bg-[#CFD9E6]" />

            {/* Main content */}
            <main className="flex-1 flex flex-col items-center mt-8">
                {/* Logo and Brand */}
                <div className="mb-8 text-center">
                    <img
                        src="/icons/logo.svg"
                        alt="SDURoom Logo"
                        className="mx-auto mb-4 text-center"
                    />
                    <h1 className="text-2xl font-bold text-gray-800 App-link">SDURoom</h1>
                </div>

                {/* Login Form */}
                <div className="w-full max-w-md p-8 space-y-6 bg-#092B7E99 rounded-lg shadow-lg mx-4">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <img src="/icons/prof.svg" alt="Login Profile" />
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Username
                            </label>
                            <input
                                id="username"
                                type="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <img src="/icons/key.svg" alt="Login Profile" />
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div className="text-center">
                            <label>Forgot password?</label>
                            {/*<a*/}
                            {/*    href="#"*/}
                            {/*    className="text-sm text-blue-600 hover:text-blue-800"*/}
                            {/*>*/}
                            {/*    Forgot password?*/}
                            {/*</a>*/}
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="w-full bg-[#374159] text-white py-2 px-4 rounded-md hover:bg-[#648a9f] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Login;