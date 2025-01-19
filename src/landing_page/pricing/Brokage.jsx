import React from 'react';

function Brokage() {
    return ( 
        <div className="container">
            <div className="row text-muted">
                <h5><br />Charges explained</h5>
                <div className="col-6">
                    <h6><br />Securities/Commodities transaction tax</h6>
                    <p style={{fontSize:'10px'}}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
                        <br /><br />
                        When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
                    </p>
                    <h6><br />Transaction/Turnover Charges</h6>
                    <p style={{fontSize:'10px'}}>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
                        <br /><br />
                        BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)
                        <br /><br />
                        BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.
                        <br /><br />
                        BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.
                        <br /><br />
                        BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
                    </p>
                    <h6><br />Securities/Commodities transaction tax</h6>
                    <p style={{fontSize:'10px'}}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
                        <br /><br />
                        When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
                    </p>
                    <h6><br />Call & trade</h6>
                    <p style={{fontSize:'10px'}}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
                        <br /><br />
                        Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
                    </p>
                </div>
                <div className="col-6">
                <h6><br />GST</h6>
                    <p style={{fontSize:'10px'}}>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)
                    </p>
                    <h6><br />SEBI Charges</h6>
                    <p style={{fontSize:'10px'}}>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
                    </p>
                    <h6><br />DP (Depository participant) charges</h6>
                    <p style={{fontSize:'10px'}}>T₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.
                        <br /><br />
                        Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.
                        <br /><br />
                        Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
                    </p>
                    <h6><br />Pledging charges</h6>
                    <p style={{fontSize:'10px'}}>₹30 + GST per pledge request per ISIN.
                    </p>
                    <h6><br />AMC (Account maintenance charges)</h6>
                    <p style={{fontSize:'10px'}}>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here
                        <br /><br />
                        For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here
                    </p>
                </div>
            </div>
            <h1><br /><br /></h1>
        </div>
     );
}

export default Brokage;