import React from 'react';
import LoginForm from '../components/AuthCompo/LoginForm';

const Login = () => {
    return (
        <div className='auth'>
            <div className="container flex justify-center items-center min-h-screen">
                <LoginForm></LoginForm>
            </div>
        </div>
    );
};

export default Login;