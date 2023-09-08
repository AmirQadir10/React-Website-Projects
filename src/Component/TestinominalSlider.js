import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

function TestinominalSlider(props) {
  return (
    
    <div className='container'>
    <div className='row'>

    <div className='col-lg-2 qotation-reviewer-image'>
    <input type="image" img src={props.Image} className='img-fluid' alt='customer image' title='customer image'/>
    </div>

    <div className='col-lg-10'>

<div className='qotation-icon'>
<FontAwesomeIcon icon={faQuoteRight} />
</div>

<div className='qotation-comment'>
<h4>
Gilroy is a great and super-professional service provider, which brought new technologes, new methodology, and a fresh perspective to our project
</h4>
</div>

<div className='qotation-name'>
<p>Jack Metiyo Shina</p>
</div>


    </div>
    
    </div>
    </div>
    
  )
}

export default TestinominalSlider