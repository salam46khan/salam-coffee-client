import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import GoogleLogin from './GoogleLogin';

const SignForm = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    // console.log(createUser);

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const imgURL = form.imgURL.value;

        if (!/[$#@%&*]/.test(password)) {
            setError('do not have a special character')
            return
        }
        if (password.length < 6) {
            setError('is less than 6 characters')
            return
        }
        if (!/[A-Z]/.test(password)) {
            setError('do not have a capital letter')
            return
        }
        if (!/[0-9]/.test(password)) {
            setError('do not have a numeric characte')
            return
        }

        // console.log(email, password, name);

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: imgURL
                })

                const userInfo = {
                    name, email
                }
                axiosPublic.post('/user', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })

                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })

    }
    return (
        <div className="bg-[#fff1] rounded-xl shadow-2xl shadow-black p-5 w-full max-w-md">
            <form onSubmit={handleSignUp} >
                <h2 className='text-2xl text-Secondary font-subTitle text-center font-bold'>Sign Up</h2>
                <div className='py-2'>
                    <label className="fieldset-label text-white">Name</label>
                    <input type="text" className=" w-full rounded-3xl mt-2 shadow shadow-black p-2 px-4 text-white focus:outline-none focus:shadow-md" placeholder="name" name='name' />
                </div>
                <div className='py-2'>
                    <label className="fieldset-label text-white">Email</label>
                    <input type="email" className=" w-full rounded-3xl mt-2 shadow shadow-black p-2 px-4 text-white focus:outline-none focus:shadow-md" placeholder="email" name='email' />
                </div>
                <div className='py-2'>
                    <label className="fieldset-label text-white">Image URL</label>
                    <input type="text" className=" w-full rounded-3xl mt-2 shadow shadow-black p-2 px-4 text-white focus:outline-none focus:shadow-md" placeholder="profile photo URL" name='imgURL' />
                </div>
                <div className='py-2'>
                    <label className="fieldset-label text-white">Password</label>
                    <input type="password" className=" w-full rounded-3xl mt-2 shadow shadow-black p-2 px-4 text-white focus:outline-none focus:shadow-md" placeholder="password" name='password' />
                </div>

                <input className='my-btn text-white w-full mt-3' type="submit" value="Sign Up" />
                
            </form>

            <div>
                <div className="divider">OR</div>

                <GoogleLogin></GoogleLogin>

                <div>
                    <p className='text-white'>If you have already an account, please <Link className='text-blue-500' to={'/auth/login'}>Login</Link> </p>
                </div>

                <div className="text-red-400 ">
                    <p className='py-2'>{error ? error : ''}</p>
                </div>
            </div>
        </div>
    );
};

export default SignForm;