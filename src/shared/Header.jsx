import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import LogUser from '../components/HeaderCompo/LogUser';
import { FaBars } from 'react-icons/fa';

const Header = () => {
    const { user } = useContext(AuthContext)
    const [openNav, setOpenNav] = useState(false)

    const myNav = <>
        <li>
            <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink to={'/coffee'}>Coffee</NavLink>
        </li>
        {
            user && <li>
                <NavLink to={'/dashboard/profile'}>Dashboard</NavLink>
            </li>
        }
    </>
    return (
        <div className='header py-2'>
            <div className="container relative px-2">
                <nav className='grid grid-cols-3 items-center '>
                    <div className='col-span-1 md:hidden flex items-center'>
                        <button onClick={() => setOpenNav(!openNav)} className='text-3xl cursor-pointer text-black'>
                            <FaBars />
                        </button>
                    </div>

                    <div className={`w-[250px] md:hidden p-[1.5px] absolute duration-300 top-[65px] bg-linear-to-b from-Secondary to-transparent rounded ${openNav ? 'left-0' : '-left-[240px] opacity-0'}`}>
                        <div className='bg-primaryColor w-full h-full rounded'>
                            <ul className='side-nav-item'>
                                {myNav}
                            </ul>
                        </div>
                    </div>

                    <div className="nav-link hidden md:block col-span-1">
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
                                    <LogUser></LogUser>
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