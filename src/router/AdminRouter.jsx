import React from 'react';
import useIdentity from '../hooks/useIdentity';
import { Navigate } from 'react-router-dom';

const AdminRouter = ({ children }) => {
    const [identity] = useIdentity()
    // console.log(identity);
    
    if (identity[0]?.role === 'admin') {
        return children
    }
    else {
        return <Navigate to={'/'}></Navigate>
    }
};

export default AdminRouter;