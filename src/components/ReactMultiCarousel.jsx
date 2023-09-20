import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    
    url:
      "src/assets/Images/portfolio-1-390x532.jpg"
  },
  {
    url:
      "src/assets/Images/portfolio-5-390x532.jpg"
  },
  //Second image url
  {
    url:
      "src/assets/Images/portfolio-6-390x532.jpg"
  },
  //Third image url
  {
    url:
      "src/assets/Images/portfolio-7.jpg"
  },

  //Fourth image url

  {
    url:
      "src/assets/Images/portfolio-8.jpg"
    
  }
];
const ReactMultiCarousel = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
       
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider relative group img-gradient" key={index}>
              <img src={imageUrl.url} alt="movie" />

              <div className='absolute z-[9999] bottom-0 p-6'>
<span className='text-sm text-[#c6c9d8] mb-2'>Development</span>
<h4 className='text-[#fff] text-2xl font-medium'>Getting tickets to the big show</h4>
<div className='my-2 hidden group-hover:block'><a herf="" className='text-[#f9004d] rounded border-2 border-[#f9004d] px-3 py-1'>Read More</a> </div>
</div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default ReactMultiCarousel;
