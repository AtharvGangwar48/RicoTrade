import React from 'react';
import { Link } from 'react-router-dom';

function createTicket() {
    return ( 
        <div className="container">
            <br />
            <br />
            <h6 className='text-muted'>To create a ticket, select a relevant topic</h6>
            <br />
            <br />
            <div className="row">
                <div className="col-4">
                <h6 className='text-muted'><i class="fa-solid fa-plus"></i> &nbsp; Account Opening</h6>
                <div className="links" style={{fontSize:'12px', padding:'12px 0px 20px 30px'}}>
                    <Link style={{textDecoration:'none'}}><p>Getting started</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Online</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Offline</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Charges</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Company, Partnership and HUF</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Non Resident Indian (NRI)</p></Link>
                </div>
                </div>
                <div className="col-4">
                <h6 className='text-muted'><i class="fa-solid fa-user"></i> &nbsp; Your Zerodha Account</h6>
                <div className="links" style={{fontSize:'12px', padding:'12px 0px 20px 30px'}}>
                    <Link style={{textDecoration:'none'}}><p>Login credentials</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Your Profile</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Account modification and segment addition</p></Link>
                    <Link style={{textDecoration:'none'}}><p>CMR & DP ID</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Nomination</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Transfer and conversion of shares</p></Link>
                </div>
                </div>
                <div className="col-4">
                <h6 className='text-muted'><i class="fa-solid fa-chart-simple"></i> &nbsp; Trading and Markets</h6>
                <div className="links" style={{fontSize:'12px', padding:'12px 0px 20px 30px'}}>
                    <Link style={{textDecoration:'none'}}><p>Trading FAQs</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Kite</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Margins</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Product and order types</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Corporate actions</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Kite features</p></Link>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                <h6 className='text-muted'><i class="fa-solid fa-wallet"></i> &nbsp; Funds</h6>
                <div className="links" style={{fontSize:'12px', padding:'12px 0px 20px 30px'}}>
                    <Link style={{textDecoration:'none'}}><p>Funds</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Fund withdrawal</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Adding funds</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Adding bank accounts</p></Link>
                    <Link style={{textDecoration:'none'}}><p>eMandates</p></Link>
                </div>
                </div>
                <div className="col-4">
                <h6 className='text-muted'><i class="fa-solid fa-ring"></i> &nbsp; Console</h6>
                <div className="links" style={{fontSize:'12px', padding:'12px 0px 20px 30px'}}>
                    <Link style={{textDecoration:'none'}}><p>IPO</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Portfolio</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Funds statement</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Profile</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Reports</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Referral program</p></Link>
                </div>
                </div>
                <div className="col-4">
                <h6 className='text-muted'><i class="fa-solid fa-money-bill"></i> &nbsp; Coins</h6>
                <div className="links" style={{fontSize:'12px', padding:'12px 0px 20px 30px', marginTop:'10px'}}>
                    <Link style={{textDecoration:'none'}}><p>Understanding mutual funds and Coin</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Coin app</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Coin web</p></Link>
                    <Link style={{textDecoration:'none'}}><p>Transactions and reports</p></Link>
                    <Link style={{textDecoration:'none'}}><p>National Pension Scheme (NPS)</p></Link>
                </div>
                </div>
            </div>
        </div>
     );
}

export default createTicket;