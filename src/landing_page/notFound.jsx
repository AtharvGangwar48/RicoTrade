import React from 'react';

function pageNotFound() {
    return ( 
        <div className="container" style={{minHeight:'50vh', textAlign:'center', marginTop:'20px'}}>
            <h1>
                Error 404 !!
            </h1>
            <h3 className='text-muted'>
                Page Not Found
            </h3>
            <h4 className='text-muted'>
                The page you are looking for is not available !!
            </h4>
        </div>
     );
}

export default pageNotFound;