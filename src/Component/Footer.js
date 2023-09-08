import React from 'react';


import BrandNameFooterEnd from './BrandNameFooterEnd';


import Brand1 from '../image/footer-brand1.svg';
import Brand2 from '../image/footer-image2.png';
import Brand3 from '../image/footer-image3.png';
import Brand4 from '../image/footer-image4.svg';
import Brand5 from '../image/footer-image5.png';

function Footer(props) {
  return (
    <>
    <div className='footer-bg'>
    <div className='container'>
    <div className='col-12'>
    
    <div className='footer-content'>

    <span className='footer-content-span'>{props.Spantitle}</span>
    <h6>{props.Heading}
    <span className='greenhighlight'> {props.GreenHeading}</span>
    </h6>
    

    <div className='subcribe-section'>
<input type='email' placeholder='Enter Your Email' />
<button type='button'>Subcirbe</button>
    
    </div>

<<<<<<< HEAD

=======
  
>>>>>>> origin/master


    </div>
    </div>
    </div>  
    </div>

    <BrandNameFooterEnd
    BrandImage1={Brand1}
    BrandImage2={Brand2}
    BrandImage3={Brand3}
    BrandImage4={Brand4}
    BrandImage5={Brand5}
    />
    </>
  )
}

export default Footer
