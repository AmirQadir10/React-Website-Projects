import React from 'react';

import BannerVideo from './assets/Videos/Studio Agency -- React Multipurpose Template.mp4'


import MainLogo from './assets/Images/logo.png'
import AboutImage from './assets/Images/about-3.jpg';


import AllWorkImage1 from './assets/Images/portfolio-1-390x532.jpg'
import AllWorkImage2 from './assets/Images/portfolio-5-390x532.jpg'
import AllWorkImage3 from './assets/Images/portfolio-6-390x532.jpg'



import CountUp from 'react-countup';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


import CustomerTestinominal from './components/CustomerTestinominal';

function App() {
  

  const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={AllWorkImage1} onDragStart={handleDragStart} role="presentation" />,
  <img src={AllWorkImage2} onDragStart={handleDragStart} role="presentation" />,
  <img src={AllWorkImage3} onDragStart={handleDragStart} role="presentation" />,
];


  return (
    <>


{/* ============================ */}
{/* ------banner in the site */}
{/* ============================ */}
<section className='relative '>

<video 
        autoPlay
        loop
        muted
        src={BannerVideo}
        className=" w-full min-w-full min-h-full max-w-none brightness-50 bg-[#63666d]"
typeof='video/mp4'></video>


<nav className='absolute top-0'>

<div className='grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 grid-cols-12 mx-16 lg:py-14 md:py-14 sm:py-7 py-7'>

  <div className='lg:col-span-6 md:col-span-4 sm:col-span-6 col-span-6'>
    <img src={MainLogo} alt="Main logo" />
  </div>

  <div className='lg:col-span-6 md:col-span-8 lg:block md:block sm:hidden hidden'>

<ul className='text-[#fff] flex justify-center items-center'>
<li><a href={"#"} className="text-[#c6c9d8] text-ellipsis font-medium  px-5 inline-block hover:text-[#f9004d]">Home</a> </li>
<li> <a href={"#"} className="text-[#c6c9d8] text-ellipsis font-medium  px-5 inline-block hover:text-[#f9004d]">Service</a> </li>
<li> <a href={"#"} className="text-[#c6c9d8] text-ellipsis font-medium  px-5 inline-block hover:text-[#f9004d]">About</a> </li>
<li> <a href={"#"} className="text-[#c6c9d8] text-ellipsis font-medium  px-5 inline-block hover:text-[#f9004d]">Pages</a> </li>
<li> <a href={"#"} className="text-[#c6c9d8] text-ellipsis font-medium  px-5 inline-block hover:text-[#f9004d]">Blocks</a> </li>
<li> <a href={"#"} className="text-[#c6c9d8] text-ellipsis font-medium  px-5 inline-block hover:text-[#f9004d]">Contact</a></li>
<li> <a href={"#"} className="text-[#c6c9d8] text-ellipsis font-medium py-2 px-6 mx-4 inline-block hover:text-[#f9004d] border-[#c6c9d8] border-2 rounded-lg">Buy Now</a> </li>
</ul>

</div>


</div>

</nav>


<div className='container mx-auto max-w-6xl px-2'>
  <div className='absolute grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 grid-cols-12 lg:top-[40vh]  md:top-[20vh] sm:top-[22vh] top-[12vh] justify-center items-center'>

<div className='lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 text-[#fff] lg:text-left md:text-left sm:text-center text-center'>
<h1 className='lg:text-6xl md:text-6xl sm:text-4xl text-2xl text-[#fff] font-black'>WELCOME VIDEO STUDIO</h1>
<p className='lg:text-2xl md:text-2xl sm:text-base text-sm  font-light text-[#c6c9d8] '>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.</p>
</div>

<div className='lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12'>
  
<div className=''>
  <button className='border-[#f9004d] bg-[#f9004d] block relative my-0 mx-auto lg:w-24 lg:h-24 md:w-24 md:h-24 sm:w-10 sm:h-10  w-10 h-10 rounded-full video-popup'>
    <span className='play-icon'></span>
  </button>
</div>


</div>


</div>
</div>


</section>

{/* ============================ */}
{/* -----------About */}
{/* ============================ */}
<section className='my-28'>

<div className='container mx-auto max-w-6xl px-2'>
<div className='grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 grid-cols-12 flex justify-evenly items-center'>


<div className='lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 lg:text-left md:text-left sm:text-center text-center'>
<img src={AboutImage} alt="girl image with pen in hand" />
</div>
<div className='lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 px-5'>

<h2 className='lg:text-6xl md:text-6xl sm:text-3xl text-3xl font-bold my-[8px] text-[#1f1f25]'>About</h2>
<p className='font-light text-[#717173] lg:text-lg md:text-lg sm:text-sm text-sm my-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>

<div className='flex mt-6'>
  <div className=''>
    <h3 className='lg:text-3xl md:text-3xl sm:text-xl text-xl font-bold mb-[8px] text-[#1f1f25]'>Who we are</h3>
    <p className='font-light text-[#717173] lg:text-lg md:text-lg sm:text-sm text-sm my-8'>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
  </div>
  
  <div className=''>
    <h3 className='lg:text-3xl md:text-3xl sm:text-xl text-xl font-bold mb-[8px] text-[#1f1f25]'>Who we are</h3>
    <p className='font-light text-[#717173] lg:text-lg md:text-lg sm:text-sm text-sm my-8'>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
  </div>

</div>


</div>

</div>
</div>
</section>



{/* ============================ */}
{/* -----------Services */}
{/* ============================ */}
<section className='py-28 bg-[#f5f6fb]'>
<div className='container mx-auto max-w-6xl px-2'>
<div className='grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 grid-cols-12 '>


<div className='lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12 lg:p-0 md:p-0 sm:p-10 p-0'>
  <h3 className='lg:text-6xl md:text-6xl sm:text-3xl text-3xl mb-2 font-bold text-[#1f1f25]'>Services</h3>
  <p className='lg:text-lg md:text-lg sm:text-sm text-sm text-[#1d1d24bf] my-[15px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>

  <p className='text-base font-medium text-[#1f1f25]'>
  Request Custom Service
    <span></span>
  </p>
  
</div>
<div className='lg:col-span-8 md:col-span-8 sm:col-span-12 col-span-12'>

<div className='lg:flex md:flex sm:flex '>

<div className='w-full p-10 visible rounded-lg opacity-100 hover:bg-gradient-to-r from-[#f81f01] to-[#ef0963] group'>
<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" className="text-[#ef0963] text-5xl font-normal group-hover:text-[#fff] " stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line></svg>
  <h4 className='text-2xl font-medium my-5 group-hover:text-[#fff]'>Business Stratagy</h4>
  <p className='text-lg  text-[#1d1d24bf] group-hover:text-[#fff]'>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
</div>

<div className='w-full p-10 visible rounded-lg opacity-100 hover:bg-gradient-to-r from-[#f81f01] to-[#ef0963] group'>
<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" className="text-[#ef0963] text-5xl font-normal group-hover:text-[#fff]" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
  <h4 className='text-2xl font-medium my-5 group-hover:text-[#fff]'>Website Development</h4>
  <p className='text-lg  text-[#1d1d24bf] group-hover:text-[#fff]'>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
</div>

</div>

<div className='lg:flex md:flex sm:flex mt-10'>

<div className='w-full p-10 visible rounded-lg opacity-100 hover:bg-gradient-to-r from-[#f81f01] to-[#ef0963] group'>
<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" className="text-[#ef0963] text-5xl font-normal group-hover:text-[#fff]" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  <h4 className='text-2xl font-medium my-5 group-hover:text-[#fff]'>Marketing & Reporting</h4>
  <p className='text-lg  text-[#1d1d24bf] group-hover:text-[#fff]'>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
</div>
<div className='w-full p-10 visible rounded-lg opacity-100 hover:bg-gradient-to-r from-[#f81f01] to-[#ef0963] group'>
<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" className="text-[#ef0963] text-5xl font-normal group-hover:text-[#fff]" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
  <h4 className='text-2xl font-medium my-5 group-hover:text-[#fff]'>Mobile App Development</h4>
  <p className='text-lg  text-[#1d1d24bf] group-hover:text-[#fff]'>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
</div>

</div>

</div>



</div>
</div>
</section>

{/* ============================ */}
{/* -----------All Work */}
{/* ============================ */}


<section className='my-28'>
<div className='container mx-auto max-w-6xl px-2'>
<div className='grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 grid-cols-12'>

<div className='col-span-12'>
<h3 className='text-center lg:text-6xl md:text-6xl sm:text-3xl text-3xl mb-2 font-bold text-[#1f1f25]'>All Works</h3>
<p className='text-center lg:text-lg md:text-lg sm:text-sm text-sm text-[#1d1d24bf] my-[15px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
</div>

<div className='col-span-12'>
<AliceCarousel mouseTracking items={items} />

</div>

</div>
</div>
</section>


{/* ============================ */}
{/* -----------Complete Projects */}
{/* ============================ */}

<section className='my-28'>
<div className='container mx-auto max-w-6xl px-2'>
<div className='grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 grid-cols-12'>

<div className='col-span-12'>
<h3 className='text-center lg:text-6xl md:text-6xl sm:text-3xl text-3xl mb-2 font-bold text-[#1f1f25]'>Completed 1200+ Projects<br/>
Successfully.</h3>

</div>
</div>



<div className='grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 grid-cols-12 mt-10'>

<div className='lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 flex justify-center items-center flex-col px-4'>
<CountUp end={800} 
duration={5}
suffix=" +"
className='lg:text-6xl md:text-6xl sm:text-3xl text-3xl mb-2 font-bold text-[#f9004d]'/>
<p className='text-center lg:text-lg md:text-lg sm:text-sm text-sm text-[#1d1d24bf] my-[15px]'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
</div>

<div className='lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 flex justify-center items-center flex-col px-4'>
<CountUp end={1200} 
duration={5}
suffix=" +"
className='lg:text-6xl md:text-6xl sm:text-3xl text-3xl mb-2 font-bold text-[#f9004d]'/>
<p className='text-center lg:text-lg md:text-lg sm:text-sm text-sm text-[#1d1d24bf] my-[15px]'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
</div>



<div className='lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 flex justify-center items-center flex-col px-4'>
<CountUp end={700} 
duration={5}
suffix=" +"
className='lg:text-6xl md:text-6xl sm:text-3xl text-3xl mb-2 font-bold text-[#f9004d]'/>
<p className='text-center lg:text-lg md:text-lg sm:text-sm text-sm text-[#1d1d24bf] my-[15px]'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
</div>

</div>
</div>
</section>

{/* ============================ */}
{/* -----------Testinominal*/}
{/* ============================ */}
<CustomerTestinominal/>

    </>
  )
}

export default App
