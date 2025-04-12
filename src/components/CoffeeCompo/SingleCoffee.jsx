import React from 'react';
import PageHead from '../Common/PageHead/PageHead';
import { useLoaderData } from 'react-router-dom';

const SingleCoffee = () => {
    const coffee = useLoaderData()


    return (
        <div>
            <PageHead Title={'Coffee Details'} subTitle={'Sip & Savor'}></PageHead>
            <div className='container flex justify-center items-center py-10'>
                <div className='bg-[#0005] p-10 rounded-2xl grid grid-cols-2 w-full max-w-2xl'>
                    <div className='col-span-1 flex justify-center'>
                        <img className='w-3/4' src={coffee.photo} alt="" />
                    </div>
                    <div className='col-span-1 md:border-l-2 border-Secondary px-2 flex flex-col '>
                        <h1 className='text-3xl font-subTitle text-primaryColor'>{coffee.name}</h1>
                        <p>{coffee.chef}</p>

                        <div className='mt-3 flex justify-between items-center border-b pb-2'>
                            <div>
                                <h5 className='font-semibold'>Category</h5>
                                <p className='text-Secondary text-sm'>{coffee.category}</p>
                            </div>
                            <div>
                                <h5 className='font-semibold'>Supplier</h5>
                                <p className='text-Secondary text-sm'>{coffee.supplier}</p>
                            </div>
                        </div>
                        <div className='grow'>
                            <p>
                                {coffee.details}
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