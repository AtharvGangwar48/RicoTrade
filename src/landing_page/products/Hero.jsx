import React from 'react';
import { Link } from 'react-router-dom';

function Product() {
    return ( 
        <div className="container" style={{textAlign:'center'}}>
            <h1><br /><br />Zerodha Products</h1>
            <h6 className='text-muted'> <br />Sleek, modern, and intuitive trading platforms <br /><br /></h6>
            <p className='text-muted'>Check out our <Link style={{textDecoration:'none'}} to='/pricing'>investment offerings →</Link></p>
            <br />
            <br />
            <br />
            <hr className='text-muted'/>
        </div>
     );
}

export default Product;