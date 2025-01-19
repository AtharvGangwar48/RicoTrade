import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        <nav class="navbar navbar-expand-lg border-bottom sticky-top" style={{backgroundColor:'#FFF', height:'60px', display:'flex', alignItems:'flex-start'}}>
            <div class="container-fluid" style={{width:'50%', paddingLeft:'8rem'}}>
                <Link class="navbar-brand" to='/'><img src="media/logo.svg" alt="logo" style={{width:'125px'}}/></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{width:'50%'}}>
                <form class="d-flex" role="search">
                   <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-muted sty" style={{fontSize:'small'}}>
                        <li class="nav-item"><Link to='/signup' class="nav-link p-3" style={{marginRight:'1rem'}} >Signup</Link></li>
                        <li class="nav-item"><Link to='/about' class="nav-link p-3" style={{marginRight:'1rem'}} >About</Link></li>
                        <li class="nav-item"><Link to='/product' class="nav-link p-3" style={{marginRight:'1rem'}} >Products</Link></li>
                        <li class="nav-item"><Link to='/pricing' class="nav-link p-3" style={{marginRight:'1rem'}} >Pricing</Link></li>
                        <li class="nav-item"><Link to='/support' class="nav-link p-3" style={{marginRight:'1rem'}} >Support</Link></li>
                        <li class="nav-item"><Link class="nav-link" style={{marginRight:'1rem', padding:'12px' , fontSize:'18px'}} ><i class="fa-solid fa-bars"></i></Link></li>
                    </ul>
                </form>
            </div>    
        </nav>
    );
}

export default Navbar;