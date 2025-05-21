import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation()
    if (loader) {
        return <>
            <div className="sweet-loading w-full h-52 flex justify-center items-center">
                loading...
            </div>
        </>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

export default PrivateRoute;