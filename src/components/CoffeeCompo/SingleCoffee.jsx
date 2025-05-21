import React, { useState } from 'react';
import PageHead from '../Common/PageHead/PageHead';
import { useLoaderData, useParams } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SingleCoffee = () => {
    const Respon = useParams()
    const axiosPublic = useAxiosPublic()
    const [coffee, setCoffee] = useState({})
    const {photo, chef, name, category, supplier, details, price} = coffee
    // const coffee = useLoaderData()

    axiosPublic.get(`/coffee/${Respon.id}`)
        .then(res => {
            setCoffee(res.data)
        })

    return (
        <div className='bg-white'>
            <PageHead Title={'Coffee Details'} subTitle={'Sip & Savor'}></PageHead>
            <div className='container flex justify-center items-center py-10'>
                <div className='bg-[#0002] text-black p-10 rounded-2xl grid grid-cols-2 w-full max-w-2xl'>
                    <div className='col-span-1 flex justify-center'>
                        <img className='w-3/4' src={photo} alt="" />
                    </div>
                    <div className='col-span-1 md:border-l-2 border-Secondary px-2 flex flex-col '>
                        <h1 className='text-3xl font-subTitle text-primaryColor'>{name}</h1>
                        <p>{chef}</p>
                        <p className='text-Secondary text-md font-subTitle'>{price} tk</p>

                        <div className='mt-3 flex justify-between items-center border-b pb-2'>
                            <div>
                                <h5 className='font-semibold'>Category</h5>
                                <p className='text-Secondary text-sm'>{category}</p>
                            </div>
                            <div>
                                <h5 className='font-semibold'>Supplier</h5>
                                <p className='text-Secondary text-sm'>{supplier}</p>
                            </div>
                        </div>
                        <div className='grow'>
                            <p>
                                {details}
                            </p>
                        </div>
                        <div className=''>
                            <button className='my-btn'>Buy Now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCoffee;