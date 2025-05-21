import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const LogUser = () => {
    const { user, logOut } = useContext(AuthContext)
    const [modal, setModal] = useState(false);

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('log out successful');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <>
            <button onClick={() => setModal(!modal)}>
                <img className='h-10 w-10 object-cover rounded-full border-Secondary border' src={user?.photoURL} alt="" />
            </button>

            <div className={`bg-linear-to-b from-Secondary to-transparent rounded w-[200px] absolute p-[1.5px] top-[60px] right-0 ${modal ? 'block' : 'hidden'}`}>
                <div className='bg-primaryColor rounded p-5 w-full'>
                    <div className='py-1 flex justify-center'>
                        <img className='h-16 w-16 object-cover rounded-full border-Secondary border' src={user?.photoURL} alt="" />
                    </div>
                    <p className='text-xl text-white font-subTitle text-center'>{user?.displayName}</p>

                    <div className='flex gap-1 pt-2 text-white'>
                        <Link to={'/dashboard/profile'} className='my-btn w-1/2 text-center'>
                            Profile
                        </Link>
                        <button onClick={handleLogout} className='my-btn bg-red-600 w-1/2'>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogUser;