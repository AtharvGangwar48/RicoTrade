import React from 'react';

function Hero() {
    return ( 
        <div className="container">
            <div className="row" style={{padding:'50px'}}>
                <div className="col-4 text-muted text-center">
                    <img src="media/pricing0.svg" alt="price" />
                    <h3>
                    Free equity delivery
                    </h3>
                    <p className='text-muted' style={{fontSize:'14px', padding:'10px'}}>
                    All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className="col-4 text-muted text-center">
                    <img src="media/pricing20.svg" alt="price" />
                <h3>
                Intraday and F&O trades
                </h3>
                <p className='text-muted' style={{fontSize:'14px', padding:'10px'}}>
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                </p>
                </div>
                <div className="col-4 text-muted text-center">
                    <img src="media/pricingMF.svg" alt="price" />
                <h3>
                Free direct MF
                </h3>
                <p className='text-muted' style={{fontSize:'14px', padding:'10px'}}>
                All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                </p>
                </div>
            </div>
        </div>
     );
}

export default Hero;