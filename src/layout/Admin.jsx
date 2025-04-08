import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import DashNav from '../components/DashboardCompo/DashNav';

const Admin = () => {
    const sideNav = <>
        <li>
            <NavLink to={'/dashboard/coffee'}>All Coffee</NavLink>
        </li>
        <li>
            <NavLink to={'/dashboard/add-coffee'}>Add Coffee</NavLink>
        </li>
    </>
    return (
        <div className='flex dashboard'>
            <div className='bg-primaryColor text-white w-sm border-r border-[#e005]'>
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