import React from 'react';
import { Outlet } from 'react-router-dom';

const Auth = () => {
    return (
        <div>
            <Outlet></Outlet>
            <footer>footer</footer>
        </div>
    );
};

export default Auth;