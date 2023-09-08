import React from 'react'





function CarasouleSliderImage(props) {
  return (
    <div className='col-lg-4 col-md-4 col-sm-12 col-12 CarsouleSliderBorder'>


    <img src={props.Image} alt='' title='' /> 
    <div className='color-div'>{props.CityName}</div>


    
    
    </div>
  )
}

export default CarasouleSliderImage