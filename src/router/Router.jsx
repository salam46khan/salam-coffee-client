import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/Home';
import Auth from '../layout/Auth';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Admin from '../layout/Admin';
import AddCoffee from '../components/DashboardCompo/AddCoffee';
import AllCoffee from '../components/DashboardCompo/AllCoffee';
import Coffee from '../pages/Coffee';
import SingleCoffee from '../components/CoffeeCompo/SingleCoffee';
import PrivateRoute from './PrivateRoute';
import Profile from '../components/DashboardCompo/Profile';
import AdminRouter from './AdminRouter';
import UpdateCo from '../components/DashboardCompo/UpdateCo';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'coffee',
                element: <Coffee></Coffee>
            },
            {
                path: 'coffee/:id',
                element: <SingleCoffee></SingleCoffee>
            }
        ]
    },
    {
        path: 'auth',
        element: <Auth></Auth>,
        children: [
            {
                path: '',
                element: <Navigate to={'/auth/login'}></Navigate>
            },
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
        element: <PrivateRoute><Admin></Admin></PrivateRoute>,
        children: [
            {
                path: 'coffee',
                element: <AllCoffee></AllCoffee>
            },
            {
                path: 'add-coffee',
                element: <AdminRouter><AddCoffee></AddCoffee></AdminRouter>
            },
            {
                path: 'update/:id',
                element: <AdminRouter><UpdateCo></UpdateCo></AdminRouter>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            },
        ]
    }
])

export default Router;