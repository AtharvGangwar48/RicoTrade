import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
    return ( 
        <div className='container mt-3 mb-3 sm-12'>
            <br />
            <br />
            <br />
        <div className="row p-6">
            <div className="col-6">
                <br />
                <br />
            <h2>Free and open market education</h2>
            <br />
            <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <Link to='/product' style={{textDecoration:'none'}}>Varsity &rarr;</Link>  
            <p className='text-muted'>
            <br />
            Trading Q&A, the most active trading and investment community in India for all your market related queries.
            <br />
            <br />
            <Link to='/support' style={{textDecoration:'none'}}>TradingQ&A &rarr;</Link>  
            
            </p>                
            </div>
            <div className="col-6">
                <img src="media/education.svg" alt="large broker" />
            </div>
        </div>
    </div>
     );
}

export default Education;