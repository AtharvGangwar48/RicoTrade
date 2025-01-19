import React from 'react';

function Award() {
    return (
        <div className='container mt-3 mb-3 sm-12'>
            <div className="row p-6">
                <div className="col-6">
                    <img src="media/largestBroker.svg" alt="large broker" />
                </div>
                <div className="col-6">
                <h1>Trust with confidence</h1>
                <h3>Customer-first always</h3>
                <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                <h3>The Zerodha universe</h3>
                <p className='text-muted'>
                Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                <br />
                <br />
                <b>Do better with money</b>
                <br />
                <br />
                With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                </p>                
                </div>
            </div>
        </div>
     );
}

export default Award;