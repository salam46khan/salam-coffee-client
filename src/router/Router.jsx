import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
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
                element: <SingleCoffee></SingleCoffee>,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
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
                element: <AllCoffee></AllCoffee>
            },
            {
                path: 'add-coffee',
                element: <AddCoffee></AddCoffee>
            }
        ]
    }
])

export default Router;