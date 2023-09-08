import React from 'react';


function Pricing(props) {
  return (
    <section className='col-lg-4 col-md-4 col-sm-12 col-12 Pricing'>
  
    


<div className='CardWithImage 'id ={props.id}>
    
    
<input type="image" img src={props.Image} alt='service image' title='service image'/>
  <h4>{props.Heading}</h4>
<p>{props.Para}</p>

<hr className='PriceHr'/>

<h4>{props.Price}</h4>
<p>{props.DateRange}</p>
<div className='price-btn'><a href={props.link} >GET START</a></div>


   

</div>



    </section>
  )
}

export default Pricing