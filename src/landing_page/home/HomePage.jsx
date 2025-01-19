import React from 'react';
import Award from './Award';
import Education from './Eduction';
import Stats from './Stats';
import Hero from './Hero';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';

function HomePage() {
    return ( 
        <div>
            <Hero />
            <Award />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </div>
     );
}

export default HomePage;