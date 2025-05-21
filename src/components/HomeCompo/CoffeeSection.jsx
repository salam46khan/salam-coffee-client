import React, { useEffect, useState } from 'react';
import CoffeeCard from '../Common/CoffeeCard/CoffeeCard';
import useCoffee from '../../hooks/useCoffee';

const CoffeeSection = () => {
    // const [coffee, setCoffee] = useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:5000/coffee')
    //     .then(res => res.json())
    //     .then(data => setCoffee(data))
    // }, [])

    const [coffee] = useCoffee()

    const coffeeItems = coffee.length>6 ? coffee.slice(0, 6): coffee;

    return (
        <div className='bg-slate-200 py-10 px-3'>
            <div className="container">
                <div className='text-center'>
                    <p className='text-Secondary'>--- Sip & Savor ---</p>
                    <h2 className='text-primaryColor text-3xl font-subTitle font-bold'>Our Popular Products</h2>
                </div>
                <div className='flex flex-wrap
                 justify-center gap-5 mt-10'>
                    {
                        coffeeItems.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CoffeeSection;