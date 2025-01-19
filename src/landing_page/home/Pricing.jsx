import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
    return (
        <div className='container mt-3 mb-3 sm-12'>
            <br />
            <br />
            <br />
        <div className="row p-6">
            <div className="col-4">
                <div className="row">
                    <div className="col-6 border p-4" style={{textAlign:'center'}}>
                        <h1>&#8377;0</h1>
                        <p className='text-muted'>Free equity delivery and direct mutual funds.</p>
                    </div>
                    <div className="col-6 border p-4" style={{textAlign:'center'}}>
                        <h1>&#8377;20</h1>
                        <p className='text-muted'>Intraday & F&O.</p>
                    </div>
                </div>                
            </div>
            <div className="col-2"></div>
            <div className="col-6">
            <h1>Unbeatable Pricing</h1>
            <br />
            <p className='text-muted'>
                We pioneered the oncept of discount broking and price transparency in India. Flat fees and no hidden charges.
            </p>
            <Link to="/pricing" style={{textDecoration:'none'}}>See prices &rarr;</Link>                
            </div>
        </div>
    </div>
    );
}

export default Pricing;