import React from 'react';
import { Link } from 'react-router-dom';

function Stats() {
    return ( 
        <div>
            <div className="container mt-3 mb-3 sm-12">
            <br />
            <br />
            <br />
            <div className="row p-6 mt-3 mb-3 sm-12">
                    <div className="col-6 mt-3 mb-3 sm-12">
                    <h3>Zerodha Support</h3>
                    <p className='text-muted'>
                        Search for an answer or browse help topics to create a ticket
                        <br />
                        <br />
                        <b>Unbeatable pricing</b>
                        <br />
                        <br />
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <Link to="/pricing" style={{textDecoration:'none'}}>See prices &rarr;</Link>      
                    </div>
                    <div className="col-6">
                        <br />
                        <br />
                        <img src="media/stats.png" alt="stat-img" style={{width:'500px', height:'100px', marginTop:'30px'}}/>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;