import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import DashNav from '../components/DashboardCompo/DashNav';
import useIdentity from '../hooks/useIdentity';
import { RxDashboard } from 'react-icons/rx';
import { useState } from 'react';

const Admin = () => {
    const [identity] = useIdentity()
    const isAdmin = identity[0]?.role === 'admin';

    const [dash, setDash] = useState(false)

    const sideNav = <>
        <li>
            <NavLink to={'/dashboard/profile'}>My Profile</NavLink>
        </li>
        {
            isAdmin && <li>
                <NavLink to={'/dashboard/coffee'}>All Coffee</NavLink>
            </li>
        }
        {
            isAdmin && <li>
                <NavLink to={'/dashboard/add-coffee'}>Add Coffee</NavLink>
            </li>
        }
        
    </>
    return (
        <div className='flex dashboard overflow-x-hidden'>

            <div className='absolute top-3 left-3 md:hidden'>
                <button onClick={() => setDash(!dash)} className='text-4xl cursor-pointer'>
                    <RxDashboard />
                </button>
            </div>

            <div className={`w-[250px] md:hidden p-[1.5px] absolute duration-300 top-[65px] bg-linear-to-b from-Secondary to-transparent rounded ${dash ? 'left-0' : '-left-[240px] opacity-0'}`}>
                <div className='bg-primaryColor w-full h-full rounded'>
                    <div className='flex justify-center py-3'>
                        <Link to={'/'}>
                            <img className='w-[120px]' src={logo} alt="" />
                        </Link>
                    </div>
                    <ul className='side-nav-item'>
                        {sideNav}
                    </ul>
                </div>
            </div>

            <div className='bg-primaryColor hidden md:block text-white w-sm border-r border-[#e005]'>
                <div className='flex justify-center py-3'>
                    <Link to={'/'}>
                        <img className='w-[150px]' src={logo} alt="" />
                    </Link>
                </div>

                <ul className='side-nav-item'>
                    {sideNav}
                </ul>
            </div>
            <div className=' w-full '>
                <nav className=' border-b border-[#e005]'>
                    <DashNav></DashNav>
                </nav>
                <div className='container p-5'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Admin;