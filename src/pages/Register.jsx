import React from 'react';
import SignForm from '../components/AuthCompo/SignForm';

const Register = () => {
    return (
        <div className='auth py-10'>
            <div className="container flex justify-center items-center min-h-screen">
                <SignForm></SignForm>
            </div>
        </div>
    );
};

export default Register;