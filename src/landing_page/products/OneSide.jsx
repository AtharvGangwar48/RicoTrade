import React from 'react';
import { Link } from 'react-router-dom';

function Oneside({imageUrl, ProductName, ProductDescription, key1, Key2}) {
    return ( 
       <div className="continer">
        <h1><br /></h1>
        <div className="row">
            <div className="col-8">
                <img src={imageUrl} alt="pic" />
            </div>
            <div className="col-4 p-3">
                <h3>{ProductName} <br /></h3>
                <p className='text-muted'>{ProductDescription}</p>
                <Link style={{textDecoration:'none'}} to='/dashboard'>{key1} &nbsp; &nbsp; </Link>
                <Link style={{textDecoration:'none'}} to='/product/kite'> &nbsp; &nbsp;{Key2} <br /><br /></Link>
                <img src="media/googlePlayBadge.svg" alt="playStore" />
                &nbsp; &nbsp;
                <img src="media/appstoreBadge.svg" alt="appStore" />
                <br />
            </div>
        </div>
        <h1><br /></h1>
       </div>
     );
}

export default Oneside;