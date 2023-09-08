import React from 'react';

function BrandNameFooterEnd(props) {
  return (
    
    <div className='BrandLogo'>
<div className='container'>
    <div className='col-12'>
    

    <ul className='Brand-image'>
    <li>

    <input type="image" src={props.BrandImage1} className='img-fluid changeBrandColor' alt='Brand Image' title='Brand Image'/>
    </li>
    <li>
    <input type="image" src={props.BrandImage2} className='img-fluid' alt='Brand Image' title='Brand Image'/>
    </li>
    <li>
    <input type="image" src={props.BrandImage3} className='img-fluid' alt='Brand Image' title='Brand Image'/>
    </li>
    <li>
    <input type="image" src={props.BrandImage4} className='img-fluid' alt='Brand Image' title='Brand Image'/>
    </li>
    <li>
    <input type="image" src={props.BrandImage5} className='img-fluid' alt='Brand Image' title='Brand Image'/>
    </li>
    </ul>
    </div>

    <div className='FooterPageLink'>
    <ul>
    <li>Home</li>
    <li>About</li>
    <li>Service</li>
    <li>Portfolio</li>
    <li>Pages</li>
    </ul>
    
    </div>


<p className='copyright-color'>COPYRIGHT © 2020 BY<span className='green-color-copyright'> QUOMODO THEME </span>ALL RIGHT RESERVED</p>
    
    
    
    </div>
    </div>
  )
}

export default BrandNameFooterEnd