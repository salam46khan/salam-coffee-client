import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic()

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user.email,
                    name: result.user.displayName
                }
                axiosPublic.post('/user', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className='my-btn w-full flex justify-center items-center gap-2'>
                <FaGoogle></FaGoogle>
                Login with Google
            </button>
        </div>
    );
};

export default GoogleLogin;