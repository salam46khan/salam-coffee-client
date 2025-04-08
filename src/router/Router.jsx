import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/Home';
import Auth from '../layout/Auth';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Admin from '../layout/Admin';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: 'auth',
        element: <Auth></Auth>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Admin></Admin>,
        children: [
            {
                path: 'coffee',
                element: <p>coffee</p>
            },
            {
                path: 'add-coffee',
                element: <p>add-coffee</p>
            }
        ]
    }
])

export default Router;