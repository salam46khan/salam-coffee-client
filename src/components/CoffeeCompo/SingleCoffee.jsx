import React from 'react';
import PageHead from '../Common/PageHead/PageHead';
import { useLoaderData } from 'react-router-dom';

const SingleCoffee = () => {
    const coffee = useLoaderData()
    console.log(coffee);
    
    return (
        <div>
            <PageHead Title={'Coffee Details'} subTitle={'Sip & Savor'}></PageHead>
            <div>
                <p>{coffee.name}</p>
            </div>
        </div>
    );
};

export default SingleCoffee;