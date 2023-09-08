import React from 'react';





function CardWithImage(props) {
  return (


    <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
    <section className='CardWithImage 'id ={props.id}>
    
    
    <input type="image" img src={props.Image} alt='service image' title='service image'/>
      <h4>{props.Heading}</h4>
    <p>{props.Para}</p>

       
    
    
    </section>
    </div> 

  )
}

export default CardWithImage