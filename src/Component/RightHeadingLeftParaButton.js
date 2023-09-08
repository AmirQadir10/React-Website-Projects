import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong,faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

function RightHeadingLeftParaButton(props) {
  return (
   
<section className='expresience-and-skills'>
<div className='container'>


<div className='col-lg-12 expresience-and-skills-content'>

<div className='row'>

<div className='col-lg-6 col-md-12 col-sm-12 col-12'>


<div className='expresience-skills-content-left'>
<strong className='filltext'>
{props.filltext}
</strong>


<div className='expresience-skills-content-left-inner'>

<span className='expresience-and-skills-content-span'>
{props.span}
</span>

<h2>
{props.heading}
 <span className='green-heading-highlight'> {props.headinghighlight}</span>
</h2>

</div>


</div>
</div>

<div className='col-lg-4 col-md-12 col-sm-12 col-12'>

<p>
{props.para}
</p>

</div>


<div className='col-lg-2 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center'>

<div className='icon'>
<FontAwesomeIcon icon={faArrowLeftLong} />
</div>

<div className='icon'>
<FontAwesomeIcon icon={faArrowRightLong} />
</div>

</div>

</div>

</div>

</div>
</section>

    
  )
}

export default RightHeadingLeftParaButton