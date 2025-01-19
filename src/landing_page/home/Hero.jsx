import React from 'react';

function Hero() {
    return ( 
        <div className="container p-5">
            <div className="row text-center">
                <img src="media/homeHero.png" alt="Hero-Image" className='mb-5'/>
                <h1 className='mt-5'>
                    Investment in everything
                </h1>
                <p>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                    <br />
                    <br />
                    <form action="/signup">
                    <button className='btn btn-primary' style={{width:'180px'}}>
                        Sign up for free
                    </button>
                    </form>
                </p>
            </div>
        </div>
     );
}

export default Hero;