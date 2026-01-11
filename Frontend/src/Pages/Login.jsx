// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import GoogleButton from '../Components/common/GoogleButton';
import GithubButton from '../Components/common/GitHubButton';

const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    return (
        <AuthLayout>
            <div className="w-full max-w-md p-8 rounded-2xl relative" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(249,250,251,0.95) 100%)', backdropFilter: 'blur(10px)', border: '1px solid rgba(66,133,244,0.15)' }}>
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2" style={{ background: 'linear-gradient(135deg, #4285f4 0%, #ea4335 25%, #f9ab00 50%, #34a853 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        Welcome Back 👋
                    </h1>
                    <p className="text-gray-700 font-medium">
                        Every login is another step toward your tech journey.
                    </p>
                    <p className="text-gray-700 font-medium">
                        Sign in to learn, connect and grow with the GDG community.
                    </p>
                </div>

                <div className="my-6 flex items-center">
                    <div className="flex-1 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #4285f4, transparent)' }}></div>
                </div>

                <div className="space-y-3">
                    <GoogleButton />
                    <GithubButton />
                </div>

                <p className="text-center mt-8 text-xs" style={{ color: '#9ca3af' }}>
                    © 2025 GDG On Campus - Quantum University
                </p>
            </div>
        </AuthLayout>
    );
};

export default Login;


