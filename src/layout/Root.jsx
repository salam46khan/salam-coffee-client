import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';
import Headroom from 'react-headroom';

const Root = () => {
    return (
        <div>
            <Headroom>
                <Header></Header>
            </Headroom>

            <Outlet></Outlet>
            <footer>footer</footer>
        </div>
    );
};

export default Root;