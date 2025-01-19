import React from 'react';
import Hero from './Hero';
import OpenAccount from '../OpenAccount'
import Brokage from './Brokage';

function pricing() {
    return ( 
        <div className="containter">
            <br />
            <br />
            <br />
            <h1 className='text-center'>Charges</h1>
            <h5 className='text-muted text-center'>List of all charges and taxes <br /> <br /> </h5>
            <Hero />
            <OpenAccount />
            <h5 className='text-center'>Calculate your costs upfront using our brokerage calculator</h5>
            <Brokage />
        </div>
     );
}

export default pricing;