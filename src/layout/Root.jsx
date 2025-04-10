import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';
import Headroom from 'react-headroom';
import Footer from '../shared/Footer';

const Root = () => {
    return (
        <div>
            <Headroom>
                <Header></Header>
            </Headroom>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;