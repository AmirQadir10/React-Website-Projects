import React from 'react';

function CardWithoutImage(props) {
  return (

<section className='col-sm-6 col-lg-4 CardWithNumber'>

{/* card section from there */} 

<span>{props.CardDateRange}</span>
<h3>{props.CardHeading}</h3>
<p>{props.CardPara}</p>

<div className='GreenBar'></div>
</section>




  )
}

export default CardWithoutImage