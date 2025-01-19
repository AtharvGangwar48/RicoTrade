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
        <div className="row">
            <div className="col-6">
                <br />
                <br />
                <img src="media/Atharv.jpg" alt="Atharv" style={{borderRadius:'30%', height:'17rem'}} />
                <h5><br />Atharv Gangwar <br /></h5>
                <p className='text-muted fs-15'>Web Developer, Created RicoTrade </p>
            </div>
            <div className="col-6" style={{textAlign:'start', padding:'0px 50px 20px 0px'}}>
                <br />
                <p><br /><br /> Hello, I am Atharv Gangwar, a passionate web developer who has been actively working in this field since November 2023. I have a strong enthusiasm for creating functional and visually appealing web applications. This is my first project using React, and I am excited to present RicoTrade, a trading platform designed as a clone of Zerodha. Through this project, I aimed to replicate and enhance key features of a professional trading platform while honing my skills in React and web development.</p>
                <p> If you'd like to explore more of my work, feel free to visit my GitHub profile: <a href="https://github.com/AtharvGangwar48">Atharv48</a>, where I showcase other exciting projects that reflect my dedication and growth in this domain. </p>
            </div>
        </div>
       </div>
     );
}

export default Team;
