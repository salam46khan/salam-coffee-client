import React from 'react';
import Banner from '../components/HomeCompo/Banner';
import Feature from '../components/HomeCompo/Feature';
import CoffeeSection from '../components/HomeCompo/CoffeeSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <CoffeeSection></CoffeeSection>
        </div>
    );
};

export default Home;