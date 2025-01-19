import React from 'react';

function Team() {
    return ( 
       <div className="container" style={{textAlign:'center'}}>
        <h3>People</h3>
        <div className="row">
            <div className="col-6">
                <br />
                <br />
                <img src="media/nithinKamath.jpg" alt="nithin" style={{borderRadius:'50%', height:'17rem'}} />
                <h5><br />Nithin Kamath <br /></h5>
                <p className='text-muted fs-15'>Founder, CEO</p>
            </div>
            <div className="col-6" style={{textAlign:'start', padding:'0px 50px 20px 0px'}}>
                <br />
                <p><br /><br /> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
            </div>
        </div>
       </div>
     );
}

export default Team;