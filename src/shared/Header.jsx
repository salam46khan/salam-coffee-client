import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [modal, setModal] = useState(false);
    console.log(modal);
    
    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('log out successful');
            })
            .catch(error => {
                console.log(error);
            })
    }

    const myNav = <>
        <li>
            <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink to={'/coffee'}>Coffee</NavLink>
        </li>
        <li>
            <NavLink to={'/dashboard/profile'}>Dashboard</NavLink>
        </li>
    </>
    return (
        <div className='header py-2'>
            <div className="container relative px-2">
                <nav className='grid grid-cols-3 items-center'>
                    <div className="nav-link col-span-1">
                        <ul className='flex gap-5 items-center text-primaryColor'>
                            {myNav}
                        </ul>
                    </div>
                    <div className="logo col-span-1 flex justify-center">
                        <Link className='w-[120px]' to={'/'}>
                            <img className='w-full' src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="register col-span-1 flex justify-end">
                        {
                            user ?
                                <div className='flex justify-center items-center'>
                                    <button onClick={()=>setModal(!modal)}>
                                        <img className='h-10 w-10 object-cover rounded-full border-Secondary border' src={user?.photoURL} alt="" />
                                    </button>

                                    <div className={`bg-linear-to-b from-Secondary to-transparent rounded w-[200px] absolute p-[1.5px] top-[60px] right-0 ${modal ? 'block': 'hidden'}`}>
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

                                </div>
                                :
                                <Link to={'/auth/signup'}>
                                    <button className='regis-btn'>Registation</button>
                                </Link>
                        }
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;