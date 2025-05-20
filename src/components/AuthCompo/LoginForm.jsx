import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const { logInUser } = useContext(AuthContext);
    // console.log(createUser);
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then((result) => {
                console.log(result.user);
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
                setError(error)
            })
    }
    return (
        <form onSubmit={handleLogin} className="bg-[#fff1] rounded-xl shadow-2xl shadow-black p-5 w-full max-w-md">
            <h2 className='text-2xl text-Secondary font-subTitle text-center font-bold'>Login form</h2>
            <div className='py-2'>
                <label className="fieldset-label text-white">Email</label>
                <input type="email" className=" w-full rounded-3xl mt-2 shadow shadow-black p-2 px-4 text-white focus:outline-none focus:shadow-md" placeholder="Email" name='email' />
            </div>
            <div className='py-2'>
                <label className="fieldset-label text-white">Password</label>
                <input type="password" className=" w-full rounded-3xl mt-2 shadow shadow-black p-2 px-4 text-white focus:outline-none focus:shadow-md" placeholder="Password" name='password' />
            </div>
            <input className='my-btn text-white w-full my-3' type="submit" value="Submit" />

            <div className="text-red-400 ">
                <p className='py-2'>{error ? error : ''}</p>
            </div>

            <div>
                <p className='text-white'>If you haven't an account, please <Link className='text-blue-500' to={'/auth/signup'}>register</Link> </p>
            </div>
        </form>
    );
};

export default LoginForm;