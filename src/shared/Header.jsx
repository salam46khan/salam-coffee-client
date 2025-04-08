import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png'

const Header = () => {
    const myNav = <>
        <li>
            <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink to={'/coffee'}>Coffee</NavLink>
        </li>
        <li>
            <NavLink to={'/dashboard/coffee'}>Dashboard</NavLink>
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
                        <Link to={'/auth/signup'}>
                            <button className='regis-btn'>Registation</button>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;