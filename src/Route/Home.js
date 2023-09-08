import React from 'react';


import Heroslider from '../Component/Heroslider.js';
import LeftPicRightContent from '../Component/LeftPicRightContent.js';
import CardWithoutImage from '../Component/CardWithoutImage.js';
import RightHeadingLeftPara from '../Component/RightHeadingLeftPara.js';
import BarIndicator from '../Component/BarIndicator.js';
import CardWithImage from '../Component/CardWithImage.js';
import RightHeadingLeftParaButton from '../Component/RightHeadingLeftParaButton.js';
import CarasouleSliderImage from '../Component/CarasouleSliderImage.js';
import TestinominalSlider from '../Component/TestinominalSlider.js';
import Pricing from '../Component/Pricing.js';
import BlogSlider from '../Component/BlogSlider.js';
import Footer from '../Component/Footer.js';



import HeroImage from '../image/hero-image.png';
import FailureImage from '../image/failure-section.png';
import Service1 from '../image/service1.svg';
import Service2 from '../image/service2.svg';
import Service3 from '../image/service3.svg';
import City1 from '../image/city1.png';
import City2 from '../image/city2.png';
import City3 from '../image/city3.png';

import TestinominalPic1 from '../image/testimonialImage1.jpg';
import Blog1 from '../image/blog1-image.jpg';
import Blog2 from '../image/blog2-image.jpg';
import Blog3 from '../image/blog3-image.jpg';








const Home = () => {
  return (
    <div>
  
    <Heroslider
    spantitle="Imagination "
    title="IS MORE IMPORTANT THAN KNOWLEDGE"
    para="Together we the people achieve more than any single person  could ever do alone."
    image={HeroImage}
    />
    

{/* LeftPicRightContent */}

<LeftPicRightContent
image={FailureImage}
title="FAILURE IS THE CONDIMENT THAT GIVES"
spantitle=" SUCCESS"
para="Spend more time focusing on the important aspects of your business. Turn to McCartney HR LLC in Brooklyn, NY for HR solutions. As an advanced virtual HR company, we are offering online HR systems that can be customized depending on your business needs."
btntext="Download CV"

/>


{/* RightHeadingLeftPara */}

<RightHeadingLeftPara
filltext="My Carrer"
span="MY EXPERIENCE"
heading="EXPERIENCE AND"
headinghighlight="SKILL"
para="Lorem ipsum dolor sit smet, consectetur adipisicing elitae. Sint ratione reprehenderit, error qui enim and exsit."

/>


{/* CardWithoutImage */}

<div className='col-lg-12 col-md-12'>
<div className='container'>
<div className='row d-flex justify-content-center'>

<CardWithoutImage
CardDateRange="2011 - 2014 (UI DESIGNER)"
CardHeading="GOOGLE CORPORATION."
CardPara="All you need to do, is your best work together  one package works  among seamlessly in computer daily."

/>

<CardWithoutImage
CardDateRange="2011 - 2014 (UI DESIGNER)"
CardHeading="GOOGLE CORPORATION."
CardPara="All you need to do, is your best work together  one package works  among seamlessly in computer daily."
/>

<CardWithoutImage
CardDateRange="2011 - 2014 (UI DESIGNER)"
CardHeading="GOOGLE CORPORATION."
CardPara="All you need to do, is your best work together  one package works  among seamlessly in computer daily."
/>

</div>
</div>
</div>

 {/* BarIndicator */}


 <div className='container'>
<div className='row py-4'>

<div className='col-lg-6'>
<BarIndicator
Title="Wed Developemnt"
ShowIndicator = "80%"
/>
</div>


<div className='col-lg-6'>
<BarIndicator
Title="graphics design"
ShowIndicator = "80%"
/>
</div>

<div className='col-lg-6'>
<BarIndicator
Title="Digital Marketing"
ShowIndicator = "80%"
/>
</div>


<div className='col-lg-6'>
<BarIndicator
Title="Lead Generation"
ShowIndicator = "80%"
/>
</div>

</div>
</div>

{/* RightHeadingLeftPara */}

<RightHeadingLeftPara
filltext="Our Services"
span="WHAT WE DO"
heading="SERVICES AND "
headinghighlight="SOLUTIONS"
para="Lorem ipsum dolor sit smet, consectetur adipisicing elitae. Sint ratione reprehenderit, error qui enim and exsit."

/>


{/* CardWithImage */}


<div className='container'>
<div className='row'>

<CardWithImage 
Image={Service1} 
Heading="Design Principales"
Para="Need a project completed by an expert? Let’s go! Access a human resources consultant to answer questions."
/>


<CardWithImage 
Image={Service2} 
Heading="Unique Value"
Para="Need a project completed by an expert? Let’s go! Access a human resources consultant to answer questions."
id="ative"
/>


<CardWithImage 
Image={Service3} 
Heading="Style Components"
Para="Need a project completed by an expert? Let’s go! Access a human resources consultant to answer questions."

/>

</div>
</div>




{/* RightHeadingLeftParaButton */}

<RightHeadingLeftParaButton
filltext="Our Projects"
span="Working Process"
heading="Lastet Working "
headinghighlight="Project"
para="Lorem ipsum dolor sit smet, consectetur adipisicing elitae. Sint ratione reprehenderit, error qui enim and exsit."

/>

{/* CarasouleSliderImage */}

<div className='container'>
<div className='row'>

<CarasouleSliderImage
Image={City1}
CityName="Real Estate Website"
/>


<CarasouleSliderImage
Image={City2}
CityName="FOod Website"
/>


<CarasouleSliderImage
Image={City3}
CityName="Real Estate Website"
/>



</div>
</div>


<section className='TestinominalSlider-bg'>

{/* RightHeadingLeftParaButton */}

<RightHeadingLeftParaButton
filltext="TESTIMONIALS"
span="TESTIMONIALS"
heading="CLIENTS TO "
headinghighlight="SAYS"
para="Lorem ipsum dolor sit smet, consectetur adipisicing elitae. Sint ratione reprehenderit, error qui enim and exsit."

/>


{/* TestinominalSlider */}

<TestinominalSlider
Image={TestinominalPic1}

/>

</section>


{/* Pricing */}
<section className='Pricing-bg'>
<div className='container'>

{/* RightHeadingLeftPara */}

<RightHeadingLeftPara
filltext="Our Services"
span="WHAT WE DO"
heading="SERVICES AND "
headinghighlight="SOLUTIONS"
para="Lorem ipsum dolor sit smet, consectetur adipisicing elitae. Sint ratione reprehenderit, error qui enim and exsit."

/>




<div className='row justify-content-center align-items-center'>

<Pricing
Image={Service1}
Heading="INFLUENCER"
Para="Best For Small Investors"
Price="$104"
DateRange="Per Month"
link='#'

/>

<Pricing
Image={Service2}
Heading="INFLUENCER"
Para="Best For Small Investors"
Price="$104"
DateRange="Per Month"
link='#'

/>

<Pricing
Image={Service3}
Heading="INFLUENCER"
Para="Best For Small Investors"
Price="$104"
DateRange="Per Month"
link='#'

/>
</div>
</div>
</section>


<section className='blog-bg'>
<div className='container'>

{/* RightHeadingLeftParaButton */}

<RightHeadingLeftParaButton
filltext="News"
span="RECENT NEWS DESK"
heading="LATEST NEWS &   "
headinghighlight="BLOGS"
para="Lorem ipsum dolor sit smet, consectetur adipisicing elitae. Sint ratione reprehenderit, error qui enim and exsit."

/>


<div className='col-12'>
<div className='row'>

{/* BlogSlider */}

<BlogSlider
Image={Blog1}
Para="December 17, 2019"
Heading="Harness The Power Of Your Dreams"
ReadBtn="Read More"
/>

<BlogSlider
Image={Blog2}
Para="December 17, 2019"
Heading="Harness The Power Of Your Dreams"
ReadBtn="Read More"
/>


<BlogSlider
Image={Blog3}
Para="December 17, 2019"
Heading="Harness The Power Of Your Dreams"
ReadBtn="Read More"
/>

</div>
</div>


</div>
</section>



<Footer
Spantitle="NEWSLETTER"
Heading="STAY UP TO DATE, SUBSCRIBE TO THE FREE"
GreenHeading="NEWSLETTER !"

/>



    </div>
  )
}

export default Home;
