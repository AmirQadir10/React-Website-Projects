import React from 'react'

const LeftPicRightContent = (props) => {
  return (
    <>

    <section className='failure-condiment-success'>
    <div className='container'>
    <div className='row'>

    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
    <img src={props.image} className='img-fluid' alt='glass boy infront screen' title='glass boy infront screen' />
    </div>


    <div className='col-lg-6 col-md-12 col-sm-12 col-12 failure-condiment-success-content'>
    
<h2>
{props.title}
<span className='green-heading-highlight'>{props.spantitle}</span>
</h2>

<p>{props.para}</p>

<div className='hero-section-btn'>
    <a href="{#}">{props.btntext}</a>
    </div>


    </div>


    </div>
    </div>
    </section>
      
    </>
  )
}

export default LeftPicRightContent;
