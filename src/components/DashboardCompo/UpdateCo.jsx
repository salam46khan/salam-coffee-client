import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import UpdateCoffee from './UpdateCoffee';

const UpdateCo = () => {
    const Respon = useParams()
    const axiosPublic = useAxiosPublic()
    const [coffee, setCoffee] = useState({})
    


    axiosPublic.get(`/coffee/${Respon.id}`)
        .then(res => {
            setCoffee(res.data)
        })
    return (
        <div>
            <UpdateCoffee coffee={coffee}></UpdateCoffee>
        </div>
    );
};

export default UpdateCo;