import React from 'react';



const Heroslider = (props) => {
  return (
    <div>
      
    

    <div className='container'>
    <div className='hero-section'>
    <div className='row'>
    

    <div className='col-lg-6 col-md-12 col-sm-12 col-12 main-heroslider'>

    <div className='hero-section-content'> 
    <h1>
    <span className='green-heading-highlight'>{props.spantitle}</span>
    {props.title}
    </h1>

    <p>{props.para}</p>
    </div>

    <div className='hero-section-btn'>
    <a href="{#}">Getting Started</a>
    </div>
    


    
    </div>
    
    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>

    <img src={props.image} className='img-fluid' alt="Old man with smile" title="Old man with smile"/>
    
    </div>
    
    </div> 

    </div>
    </div>

    </div>
  )
}

export default Heroslider;
