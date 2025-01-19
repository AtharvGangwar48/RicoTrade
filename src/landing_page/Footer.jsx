import React from 'react';
import { Link } from 'react-router-dom';

function EndFooter() {
    return ( 
        <footer style={{backgroundColor:'rgb(240, 240, 240)'}}>
            <div className="row" style={{padding:'25px 0 25px 10rem'}}>
                <div className="col-3">
                    <img className="navbar-brand" src="media/logo.svg" alt="logo" style={{width:'125px'}}/>
                    <br />
                    <br />
                    <p className='text-muted' style={{fontSize:'12px'}}>
                    © 2010 - 2025, Zerodha Broking Ltd.<br />All rights reserved.
                    </p>
                </div>
                <div className="col-3">
                    <h3>Company</h3>
                    <Link to='/' style={{textDecoration:'none', color:'gray'}}>About</Link>
                    <br />
                    <Link to='/' style={{textDecoration:'none', color:'gray'}}>Products</Link>
                    <br />
                    <Link to='/' style={{textDecoration:'none', color:'gray'}}>Pricing</Link>
                    <br />
                    <Link to='/' style={{textDecoration:'none', color:'gray'}}>Referral programme</Link>
                    <br />
                    <Link to='/' style={{textDecoration:'none', color:'gray'}}>Careers</Link>
                    <br />
                    <Link to='/' style={{textDecoration:'none', color:'gray'}}>Zerodha.tech</Link>
                    <br />
                    <Link to='/' style={{textDecoration:'none', color:'gray'}}>Open source</Link>
                    <br />
                    <Link to='/' style={{textDecoration:'none', color:'gray'}}>Press & media</Link>
                    <br />
                    <Link to='/' style={{textDecoration:'none', color:'gray'}}>Zerodha Cares (CSR)</Link>    
                </div>
                <div className="col-3">
                    <h3>Support</h3>
                    <Link to='/support' style={{textDecoration:'none', color:'gray'}}>Contact us</Link>
                    <br />
                    <Link to='/support' style={{textDecoration:'none', color:'gray'}}>Support portal</Link>
                    <br />
                    <Link to='/support' style={{textDecoration:'none', color:'gray'}}>Z-Connect blog</Link>
                    <br />
                    <Link to='/support' style={{textDecoration:'none', color:'gray'}}>List of charges</Link>
                    <br />
                    <Link to='/support' style={{textDecoration:'none', color:'gray'}}>Downloads & resources</Link>
                    <br />
                    <Link to='/support' style={{textDecoration:'none', color:'gray'}}>Videos</Link>
                    <br />
                    <Link to='/support' style={{textDecoration:'none', color:'gray'}}>Market overview</Link>
                    <br />
                    <Link to='/support' style={{textDecoration:'none', color:'gray'}}>Status of your complaints</Link>
                    <br />
                    <Link to='/support' style={{textDecoration:'none', color:'gray'}}>How to file Link complaint?</Link>
                </div>
                <div className="col-3">
                    <h3>Account</h3>
                    <Link to='/signup' style={{textDecoration:'none', color:'gray'}}>Open an account</Link>
                    <br />
                    <Link to='/signup' style={{textDecoration:'none', color:'gray'}}>Fund transfer</Link>
                </div>
                <p className='text-muted' style={{fontSize:'12px'}}>
                <br />
                <br />
                    Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI 
                    Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered
                    Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
                    any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the 
                    Risk Disclosure Document as prescribed by SEBI | ICF Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing 
                    complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances Smart Online Dispute 
                    Resolution | Grievances Redressal Mechanism Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 
                    2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number 
                    to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month. "Prevent unauthorised transactions 
                    in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email
                    at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered 
                    intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing 
                    to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of 
                    allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf 
                    of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                </p>
                 <h3><i class="fa-brands fa-github"></i><a href="https://github.com/AtharvGangwar48"> Atharv48 </a> 
                &nbsp; &nbsp; &nbsp; &nbsp; 
                <i class="fa-brands fa-linkedin-in"></i><a href="https://in.linkedin.com/in/atharvgangwar"> atharvgangwar </a></h3>
            </div>
        </footer>
     );
}

export default EndFooter;
