import React from 'react';
import { Link } from 'react-router-dom';

function Otherside({imageUrl, ProductName, ProductDescription, key1}) {
    return ( 
        <div className="continer">
      <div className="row">
          <div className="col-6" style={{padding:'160px 100px 100px 0px'}}>
              <h3>{ProductName} <br /></h3>
              <p className='text-muted'>{ProductDescription}</p>
              <Link style={{textDecoration:'none'}} to='/dashboard'>{key1} &nbsp; &nbsp; </Link>
          </div>
          <div className="col-4">
              <img src={imageUrl} alt="pic" />
          </div>
      </div>
      <br />
     </div>
     );
}

export default Otherside;