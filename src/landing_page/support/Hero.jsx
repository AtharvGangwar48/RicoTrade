import React from 'react';
import { Link } from 'react-router-dom'

function Hero() {
    return ( 
        <div style={{backgroundColor:'#387ed1', color:'white', justifyContent:'center', display:'flex', height:'50vh'}}>
          <div className="sideR" style={{height:'40vh', display:'flex', flexDirection:'column', justifyContent: 'space-evenly',  alignItems: 'flex-start'}}>
          <div className="block1">
                <h5 style={{fontSize:'22px'}}>Support Portal</h5>
                <p style={{fontSize:'20px', paddingRight:'100px'}}> Search for an answer or browse help topics to create a <br />ticket</p>
                </div>
            <div className="block1">
                <input style={{borderRadius:'5px'}} class="form-control mr-sm-2" type="search" placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." aria-label="Search" />
                <br />
                <br />
                <Link style={{color:'white'}}> Track account opening</Link> 
                &nbsp;
                &nbsp;
                <Link style={{color:'white'}}> Track segment activation </Link>
                &nbsp;
                &nbsp;
                <Link style={{color:'white'}}> Intraday margins </Link>
                &nbsp;
                &nbsp;<br />
                <Link style={{color:'white'}}>  Kite user manual</Link>
            </div>
          </div>
          <div className="sideR" style={{height:'40vh', display:'flex', flexDirection:'column', justifyContent: 'space-around',  alignItems: 'flex-start'}}>
          <div className="block1" style={{marginLeft:'15rem'}}>
            <Link style={{color:'white'}}>Track Ticket</Link>
            </div>
            <div className="block1">
                <ol>
                <h5 style={{fontSize:'22px'}}>Featured</h5>
                <div className="list" style={{marginLeft:'2.5rem'}}>
                <li><Link style={{color:'white'}}>Rights Entitlements listing in January 2025</Link></li>
                <br />
                <li><Link style={{color:'white'}}>Surveillance measure on scrips - January 2025</Link></li>
                </div>
                </ol>
            </div>
          </div>
        </div>
     );
}

export default Hero;