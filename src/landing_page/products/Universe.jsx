import React from 'react';

function Universe() {
    return ( 
        <div className="container">
            <div className="row" style={{textAlign:'center'}}>
                <br />
                <p style={{fontSize:'18px'}}>
                    <br />
                    Want to know more about our technology stack? Check out the Zerodha.tech blog. 
                    <br /><br /><br /><br />
                </p>
                <h2>The Zerodha Universe</h2>
                <h6 className='text-muted'><br />Extend your trading and investment experience even further with our partner platforms <br /><br /></h6>
            <div className="row" style={{padding:"20px 50px 10px 50px"}}>
            <div className="col-4 text-muted">
                    <img src="media/zerodhaFundhouse.png" alt="#" style={{width:'120px'}} />
                    <p style={{fontSize:'10px', padding:'5px 40px 5px 40px'}}>
                        Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                    <br />
                    <br />
                    <img src="media/streakLogo.png" alt="#" style={{width:'120px'}} />
                    <p style={{fontSize:'10px', padding:'5px 40px 5px 40px'}}>
                        Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>
                <div className="col-4 text-muted">
                    <img src="media/sensibullLogo.svg" alt="#" />
                    <p style={{fontSize:'10px', padding:'5px 40px 5px 40px'}}>
                        Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                    <br />
                    <br />
                    <img src="media/smallcaseLogo.png" alt="#" />
                    <p style={{fontSize:'10px', padding:'5px 40px 5px 40px'}}>
                        Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col-4 text-muted">
                    <img src="media/goldenpiLogo.png" alt="#" />
                    <p style={{fontSize:'10px', padding:'5px 40px 5px 40px'}}>
                        Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                    <br />
                    <br />
                    <img src="media/dittoLogo.png" alt="#" style={{width:'80px'}}/>
                    <p style={{fontSize:'10px', padding:'5px 40px 5px 40px'}}>
                        Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                    </p>
                </div>
                <form action="/signup">
                <br />
                <button className='btn btn-primary'>
                    Sign up for free
                </button>
                <br />
                <br />
                </form>
            </div>
            </div>
        </div>
     );
}

export default Universe;