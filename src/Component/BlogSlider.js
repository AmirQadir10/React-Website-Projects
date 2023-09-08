import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function BlogSlider(props) {
  return (
    
    <div className='col-lg-4 col-md-4 col-sm-12 col-12 py-5'>
    <div className='blog-card-slider'>
<div className='blog-card-slider-image'>
<input type="image" img src={props.Image} className='img-fluid' alt='blog image' title='blog image'/>
</div>

<div className='blog-card-slider-content'>
<p>{props.Para}</p>
<h4>{props.Heading}</h4>
<div className='blog-card-slider-ReadBtn'>

<div className='blog-icon'>
<FontAwesomeIcon icon={faArrowRightLong} />
</div>

<span>{props.ReadBtn}</span>
</div>


</div>


</div>
    </div>      
    
  )
}

export default BlogSlider
