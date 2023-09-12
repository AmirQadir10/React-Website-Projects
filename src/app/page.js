import Image from 'next/image';

import ScrollListener from '@/components/ScrollListener';
import ParticularSectionHighlight from '@/components/ParticularSectionHighlight';


// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faX,
  faFacebookF,
  faLinkedinIn,
  faYoutube
} from "@fortawesome/free-solid-svg-icons";

// Images
import MainLogo from '@/Image/logo.svg'

import OrangebgflowerDesktop from '@/Image/digital-capabilities-lead-desktop.webp';
import OrangebgflowerMob from '@/Image/digital-capabilities-lead-mob.png';


import BluebgAntDesktop from '@/Image/digital-operating-models-lead-desktop.webp'
import BluebgAntMob from '@/Image/digital-operating-models-lead-mob.png'

import PurplebgduckDesktop from '@/Image/talent-transformations-lead-desktop.webp'
import PurplebgduckMob from '@/Image/talent-transformations-lead-mob.png'

import HeadingDivider from '@/Image/vertical-line1.png'
import plus from '@/Image/explore_expand.svg'

import Musicbgimage from '@/Image/launches-new-sonic-identity-lead.jpeg'

import PeopleComment from '@/Image/danielle-emp.png'

export default function Home() {


  return (
 <>
<ScrollListener/>

<ParticularSectionHighlight/>

{/* 
<!-- ========================== -->
    <!-- ----------sidenav---------- -->
    <!-- ========================== --> 
    */}
    <section className="sidenav">
      <div className="sidenav-inner">
        <ul>
          <li>
            <a href="#section1" className="checkk">
              <div className="whitebar" id="hello11"></div>
              <p className="hidden change-colorjs"
              id="barchangebyhover1">Navitation</p>
            </a>
          </li>
          <li>
            <a href="#section2" className="checkk">
              <div className="whitebar" id="hello22"></div>
              <p className="hidden change-colorjs"
              id="barchangebyhover2">Digital Core</p>
            </a>
          </li>
          <li>
            <a href="#section3" className="checkk">
              <div className="whitebar" id="hello33"></div>
              <p className="hidden change-colorjs"
              id="barchangebyhover3">Digital operating</p>
            </a>
          </li>
          <li>
            <a href="#section4" className="checkk">
              <div className="whitebar" id="hello44"></div>
              <p className="hidden change-colorjs"
              id="barchangebyhover4">Empowering talent</p>
            </a>
          </li>
          <li>
            <a href="#section5" className="checkk">
              <div className="whitebar" id="hello55"></div>
              <p className="hidden change-colorjs"
              id="barchangebyhover5">The Next</p>
            </a>
          </li>

          <li>
            <a href="#section7" className="checkk">
              <div className="whitebar" id="hello66"></div>
              <p className="hidden change-colorjs"
              id="barchangebyhover6">About Us</p>
            </a>
          </li>

          <li>
            <a href="#section8" className="checkk">
              <div className="whitebar" id="hello77"></div>
              <p className="hidden change-colorjs"
              id="barchangebyhover7">Invertors</p>
            </a>
          </li>

          <li>
            <a href="#section9" className="checkk">
              <div className="whitebar" id="hello88"></div>
              <p className="hidden change-colorjs"
              id="barchangebyhover8">Careers</p>
            </a>
          </li>

          <li>
            <a href="#section10" className="checkk">
              <div className="whitebar" id="hello99"></div>
              <p className="hidden change-colorjs"
              id="barchangebyhover9">Contact us</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
      
      {/* 
      <!-- ========================== -->
    <!-- ----------banner---------- -->
    <!-- ========================== --> 
    */}

      <span id="barchangebyhover1-section">
    <section className=" lg:bg-[url('sources/images/rafael-nadal-lead.jpg')] md:bg-[url('sources/images/rafael-nadal-lead.jpg')] bg-cover bg-no-repeat lg:bg-center md:bg-center min-h-full min-w-full h-screen sm:bg-[url('sources/images/rafael-nadal-mob.jpg')] bg-[url('sources/images/rafael-nadal-mob.jpg')] sm:bg-right bg-right" id="section1">
      {/* <!-- ----------Navigation Start---------- --> */}

      <nav className="text-[#fff]">
        <div className="container mx-auto max-w-6xl px-2">
          <div
            className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 grid-cols-12  py-8"
          >
            <div className="lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-6">
              <a href="#">
                <Image src={MainLogo} alt="logo of site"  width={100} height={100}/>
              </a>
            </div>

            <div className="lg:col-span-6 md:col-span-6 lg:block md:hidden sm:hidden hidden">
              <ul className="nav-menuLinks flex justify-center items-center ">
                <li className="px-2">
                  <a
                    href="#"
                    className="text-base font-normal text-[#fff] myriad-pr"
                    >Navigation your next</a
                  >
                </li>
                <li className="px-2">
                  <a
                    href="#"
                    className="text-base font-normal text-[#fff] myriad-pr"
                    >infosys Knowledge Institute</a
                  >
                </li>
                <li className="px-2">
                  <a
                    href="#"
                    className="text-base font-normal text-[#fff] myriad-pr"
                    >Investors</a
                  >
                </li>
                <li className="px-2">
                  <a
                    href="#"
                    className="text-base font-normal text-[#fff] myriad-pr"
                    >Careers</a
                  >
                </li>
              </ul>
            </div>

            <div
              className="lg:col-span-1 md:col-span-1 sm:col-span-3 col-span-3 flex justify-end"
            >
               <FontAwesomeIcon icon={faMagnifyingGlass} 
               className='font-bold text-2xl'/>
            </div>

            <div
              className="lg:col-span-1 md:col-span-1 sm:col-span-3 col-span-3 flex justify-end"
            >
              <FontAwesomeIcon icon={faBars} 
              className='font-bold text-2xl'/>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- ===============Navigation END=============== --> */}

      <div className="container mx-auto max-w-6xl px-2">
        <div className="grid grid-cols-1">
          <div className="banner-content flex justify-center flex-col h-[100vh]">
            <h1 className="text-7xl font-medium tungstenw05-medium text-[#ffffff]">
              Champions Evolve.
            </h1>
            <ul className="flex p-[20px] pl-0">
              <li
                className="pl-0 mr-2 text-lg text-[#ffffff] font-normal uppercase"
              >
                Digital-First
              </li>
              <li className="mx-2 text-lg text-[#ffffff] font-normal uppercase">
                Cloud-First
              </li>
              <li className="mx-2 text-lg text-[#ffffff] font-normal uppercase">
                AI-First
              </li>
            </ul>
            <div className="btn">
              <a className="primary-btn" href="#">Know More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
</span>
      
      
      {/*
      <!-- ========================== -->
    <!------Digital Core Capabilities- -->
    <!-- ========================== --> 
    */}

    <span id="barchangebyhover2-section">
    <section className="bg-[#df9926] h-screen min-h-full min-w-full w-auto bg-center bg-no-repeat py-[100px] px-0 relative z-[-9999]" id="section2">
      <div className="container mx-auto max-w-6xl px-2">

        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 grid-cols-12">
          <div className="digital-core-content lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
            <h2 className="lg:text-7xl md:text-7xl font-medium tungstenw05-medium text-[#ffffff] sm:text-4xl text-4xl">
              Digital Core Capabilities
            </h2>
            <p className="text-xl font-normal text-[#ffffff] my-5">
              Build vital capabilities to deliver digital outcomes.
            </p>

          

            <div className="btn">
              <a className="primary-btn" href="#">Know More</a>
            </div>
            <span
              className="text-sm font-normal uppercase #fff opacity-70 mx-0 my-[20px] text-[#ffffff] lg:block md:hidden sm:hidden hidden"
              >Case Studies</span
            >

            <div className="grid grid-cols-2 lg:block md:hidden sm:hidden hidden">
              <div className="case-content">
                <h3 className="font-bold text-2xl text-[#ffffff] my-[20px]">
                  Pfizer's journey towards increased productivity, powered by AI
                </h3>
                <a href="" className="text-[#ffffff] text-sm">view</a>
              </div>
              <div className="case-content">
                <h3 className="font-bold text-2xl text-[#ffffff] my-[20px]">
                  Pfizer's journey towards increased productivity, powered by AI
                </h3>
                <a href="#" className="text-[#ffffff] text-sm">view</a>
              </div>
            </div>
          </div>

          <div className=" lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 h-max w-max md:flex md:justify-center md:items-center">
            <Image
              src={OrangebgflowerDesktop}
              alt="flower with butterfly"
              className=" bg-right-center bg-no-repeat bg-contain left-0 top-0 absolute
              md:hidden lg:block sm:hidden hidden"
            />

<div className="lg:hidden md:block sm:block block md:col-span-12 sm:col-span-12 col-span-12 h-max w-max bg-right">
              <Image 
              src={OrangebgflowerMob}
              alt="flower with butterfly mobile pic"
              className="md:block lg:hidden sm:block bg-right-center bg-no-repeat bg-contain left-0 absolute z-[-9999] top-[17rem] h-[30rem]"
              />
</div>
           
          </div>
        </div>

      </div>
    </section>
</span>  

{/* 
<!-- ========================== -->
    <!------Digital Operating Models- -->
    <!-- ========================== --> 
    */}
<span id="barchangebyhover3-section">
    <section className="digital-operating-bg bg-[#0f9ffa] h-screen min-h-full min-w-full w-auto bg-center bg-no-repeat py-[100px] px-0 relative z-[-9999]" id="section3">
      <div className="container mx-auto max-w-6xl px-2">
        <div
          className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 grid-cols-12"
        >
          <div
            className="digital-operating-image lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 h-max w-max"
          >
            <Image
              src={BluebgAntDesktop}
              alt="flower with butterfly"
              className="bg-left-center bg-no-repeat bg-contain left-0 top-0 absolute
              md:hidden lg:block sm:hidden hidden"
              
            />
          </div>

          <div className="lg:hidden md:block sm:block block md:col-span-12 sm:col-span-12 col-span-12 h-max w-max bg-right">
            <Image
            src={BluebgAntMob} 
            alt="flower with butterfly mobile pic"
            className="md:block lg:hidden sm:block bg-right-center bg-no-repeat bg-contain left-0 absolute z-[-9999] top-[17rem] h-[30rem]"
            />
          </div>

          <div
            className="digital-operating-content lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12"
          >
            <h2 className="lg:text-7xl md:text-7xl font-medium tungstenw05-medium text-[#ffffff] sm:text-4xl text-4xl">
              Digital Core Capabilities
            </h2>

            <p className="text-xl font-normal text-[#ffffff] my-5">
              Build vital capabilities to deliver digital outcomes.
            </p>

            <div className="btn">
              <a className="primary-btn" href="#">Know More</a>
            </div>
            <span
              className="text-sm font-normal uppercase #fff opacity-70 mx-0 my-[20px] text-[#ffffff] lg:block md:hidden sm:hidden hidden"
              >Case Studies</span
            >

            <div className="grid grid-cols-2 lg:block md:hidden sm:hidden hidden">
              <div className="case-content">
                <h3 className="font-bold text-2xl text-[#ffffff] my-[20px]">
                  Pfizer's journey towards increased productivity, powered by AI
                </h3>
                <a href="#" className="text-[#ffffff] text-sm">view</a>
              </div>
              <div className="case-content">
                <h3 className="font-bold text-2xl text-[#ffffff] my-[20px]">
                  Pfizer's journey towards increased productivity, powered by AI
                </h3>
                <a href="#" className="text-[#ffffff] text-sm">view</a>
              </div>
            </div>
          </div>
        </div>




      </div>
    </section>
  </span>


  {/* 
  <!-- ========================== -->
    <!--Empowering Talent Transformations--->
    <!-- ========================== --> 
    */}
    <span id="barchangebyhover4-section"> 
    <section className="empowering-talent-bg bg-[#963596] h-screen min-h-full min-w-full w-auto bg-center bg-no-repeat py-[100px] px-0 relative z-[-9999]" id="section4">
      <div className="container mx-auto max-w-6xl px-2">
        <div
          className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 grid-cols-12"
        >
          <div
            className="empowering-talent-content lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12"
          >
            <h2 className="lg:text-7xl md:text-7xl font-medium tungstenw05-medium text-[#ffffff] sm:text-4xl text-4xl">
              Digital Core Capabilities
            </h2>
            <p className="text-xl font-normal text-[#ffffff] my-5">
              Embrace the talent revolution to remain relevant in the future.
            </p>

            <div className="btn">
              <a className="primary-btn" href="#">Know More</a>
            </div>
            <span
              className="text-sm font-normal uppercase #fff opacity-70 mx-0 my-[20px] text-[#ffffff] lg:block md:hidden sm:hidden hidden"
              >Case Studies</span
            >

            <div className="grid grid-cols-2 lg:block md:hidden sm:hidden hidden">
              <div className="case-content">
                <h3 className="font-bold text-2xl text-[#ffffff] my-[20px]">
                  Pfizer's journey towards increased productivity, powered by AI
                </h3>
                <a href="#" className="text-[#ffffff] text-sm">view</a>
              </div>
              <div className="case-content">
                <h3 className="font-bold text-2xl text-[#ffffff] my-[20px]">
                  Pfizer's journey towards increased productivity, powered by AI
                </h3>
                <a href="#" className="text-[#ffffff] text-sm">view</a>
              </div>
            </div>
          </div>

          <div className="lg:hidden md:block sm:block block md:col-span-12 sm:col-span-12 col-span-12 h-max w-max bg-right">
            <Image 
            src={PurplebgduckMob} 
            alt="flower with butterfly mobile pic"
            className="md:block lg:hidden sm:block bg-right-center bg-no-repeat bg-contain left-0 absolute z-[-9999] top-[16rem] h-[30rem]"
            />
          </div>

          <div className="empowering-talent-image lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 h-max w-max">
            <Image
              src={PurplebgduckDesktop}
              alt="flower with butterfly"
              className="empowering-talent-image-inner bg-right-center bg-no-repeat bg-contain left-0 top-0 absolute
              md:hidden lg:block sm:hidden hidden"
            />
          </div>
        </div>
      </div>
    </section>
    </span>


    {/* 
    <!-- ========================== -->
    <!--The Next--->
    <!-- ========================== --> 
    */}
    <span id="barchangebyhover5-section">
    <section className="we-bring" id="section5">
      <div className="container mx-auto max-w-6xl px-2 mt-28">
        <div className="grid lg:grid-cols-12 text-center">
          <div className="lg:col-span-12 flex justify-center p-2">
            <Image src={HeadingDivider} alt="bar image" />
          </div>
          <h3
            className="lg:col-span-12 lg:text-5xl sm:text-4xl text-4xl font-medium tungstenw05-medium text-[#000]"
          >
            The next
          </h3>
          <p
            className="lg:col-span-12 lg:text-4xl sm:text-xl text-xl font-medium tungstenw05-medium text-[#7e7e7e] my-4 px-10"
          >
            We bring you powerful advantages to navigate your digital
            transformation
          </p>
        </div>

        <div
          className="grid lg:grid-rows-6 md:grid-rows-6 sm:grid-rows-none lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 my-9 w-full lg:h-[530px] md:h-[530px] sm:h-[100rem] h-[100rem]"
        >
          <div
            className="relative group lg:row-span-6 md:row-span-6 sm:row-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 bg-[url('sources/images/experience.webp')] bg-no-repeat bg-cover hover:scale-110 transition duration-500 cursor-pointer object-cover z-[9999]"
          >
            <div className="absolute w-full bottom-0">
              <h4 className="bg-purple-950 text-[#ffff] h-8 text-xl pl-4">
                Experience
              </h4>

              <div
                className="hidden group-hover:block text-[#fff] group-hover:bg-[#382261] group-hover:opacity-90 p-4"
              >
                <strong
                  >Design-led transformation. From brand to experience</strong
                >
                <p >
                  Create unified digital experiences to enhance customer
                  experience and build loyalty
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative group lg:row-span-3 md:row-span-3 sm:row-span-6 lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12 bg-[url('sources/images/insight.webp')] bg-no-repeat bg-cover"
          >
            <div className="absolute w-full bottom-0">
              <h4 className="bg-purple-950 text-[#ffff] h-8 text-xl pl-4">
                Experience
              </h4>

              <div
                className="hidden group-hover:block text-[#fff] group-hover:bg-[#382261] group-hover:opacity-90 p-4"
              >
                <strong
                  >Design-led transformation. From brand to experience</strong
                >
                <p>
                  Create unified digital experiences to enhance customer
                  experience and build loyalty
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative group lg:row-span-3 md:row-span-3 sm:row-span-6 lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12 bg-[url('sources/images/innovate.jpg')] bg-no-repeat bg-cover"
          >
            <div className="absolute w-full bottom-0">
              <h4 className="bg-purple-950 text-[#ffff] h-8 text-xl pl-4">
                Experience
              </h4>

              <div
                className="hidden group-hover:block text-[#fff] group-hover:bg-[#382261] group-hover:opacity-90 p-4"
              >
                <strong
                  >Design-led transformation. From brand to experience</strong
                >
                <p>
                  Create unified digital experiences to enhance customer
                  experience and build loyalty
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative group lg:row-span-3 md:row-span-3 sm:row-span-6 lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12 bg-[url('sources/images/accelerate.jpg')] bg-no-repeat bg-cover"
          >
            <div className="absolute w-full bottom-0">
              <h4 className="bg-purple-950 text-[#ffff] h-8 text-xl pl-4">
                Experience
              </h4>

              <div
                className="hidden group-hover:block text-[#fff] group-hover:bg-[#382261] group-hover:opacity-90 p-4"
              >
                <strong
                  >Design-led transformation. From brand to experience</strong
                >
                <p>
                  Create unified digital experiences to enhance customer
                  experience and build loyalty
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative group lg:row-span-3 md:row-span-3 sm:row-span-6 lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12 bg-[url('sources/images/assure.jpg')] bg-no-repeat bg-cover ]"
          >
            <div className="absolute w-full bottom-0">
              <h4 className="bg-purple-950 text-[#ffff] h-8 text-xl pl-4">
                Experience
              </h4>

              <div
                className="hidden group-hover:block text-[#fff] group-hover:bg-[#382261] group-hover:opacity-90 p-4"
              >
                <strong
                  >Design-led transformation. From brand to experience</strong
                >
                <p>
                  Create unified digital experiences to enhance customer
                  experience and build loyalty
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*
     <!-- ========================== -->
    <!--==== Services section=======-->
    <!-- ========================== --> 
    */}
    
    <section>
      <div className="container mx-auto max-w-6xl px-2 my-20" >
        <div className="grid grid-cols-12">
          <div
            className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-6 group flex justify-center items-center flex-col sm:my-3"
          >
            <h4 className="text-[#000] lg:text-2xl md:text-2xl font-bold my-2 sm:text-[20px]">
              Service offerings
            </h4>
            <Image
              src={plus}
              alt="desktop icon"
              className="group-hover:rotate-[360deg] transition duration-300 ease w-[10%]"
            />
          </div>

          <div
            className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-6 group flex justify-center items-center flex-col sm:my-3"
          >
            <h4 className="text-[#000] lg:text-2xl md:text-2xl font-bold my-2 sm:text-[20px]">
              Explore industries
            </h4>
            <Image
              src={plus}
              alt="desktop icon"
              className="group-hover:rotate-[360deg] transition duration-300 ease w-[10%]"
            />
          </div>

          <div
            className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-6 group flex justify-center items-center flex-col sm:my-3"
          >
            <h4 className="text-[#000] lg:text-2xl md:text-2xl font-bold my-2 sm:text-[20px]">our platforms</h4>
            <Image
              src={plus}
              alt="desktop icon"
              className="group-hover:rotate-[360deg] transition duration-300 ease w-[10%]"
            />
          </div>

          <div
            className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-6 group flex justify-center items-center flex-col sm:my-3"
          >
            <h4 className="text-[#000] lg:text-2xl md:text-2xl font-bold my-2 sm:text-[20px]">
              Navigate your next
            </h4>
            <Image
              src={plus}
              alt="desktop icon"
              className="group-hover:rotate-[360deg] transition duration-300 ease w-[10%]"
            />
          </div>
        </div>
      </div>
    </section>
    
    {/* 
    <!-- ========================== -->
    <!--==== Ring the Sound=======-->
    <!-- ========================== --> 
    */}
    
    <section>
      <div className="container mx-auto max-w-6xl px-2 mb-28">
        <div className="grid grid-cols-12">
          <div className="col-span-12 bg-[#131a4e] relative w-full h-[23rem] overflow-hidden my-0 mx-auto group z-[-999]">
            <div className="p-5 absolute top-20 hover:scale[1.08]">
              <h3 className="lg:text-5xl sm:text-2xl text-2xl text-[#fff] mb-4">
                Ring the Sound of Opportunity, Move 1,000+1,000 Lives Forward
              </h3>
              <a className="primary-btn" href="#">Read More</a>
            </div>

            <div className="absolute top-[-88px] left-0 w-full z-[-999]">
              <Image 
              src={Musicbgimage} 
              alt="sound of the music" 
              className="transition duration-400 ease-in-out transform-group "
              />
            </div>
            
        
          </div>



      
        </div>
      </div>
    </section>

    {/*
     <!-- ========================== -->
    <!--==== Our Purpose=======-->
    <!-- ========================== --> 
    */}
    
    <section>
      <div className="container mx-auto max-w-6xl px-2 my-28">
        <div
          className="col-span-12 border-4 border-solid border-l border-b border-[#92d1ff] p-5"
        >
          <h4 className="text-[#000] font-extrabold lg:text-7xl md:text-4xl sm:text-4xl text-4xl text-center py-3">
            Our Purpose:
          </h4>
          <p className="lg:text-4xl md:text-xl sm:text-xl text-xl font-semibold text-center">
            To amplify human potential and create the next opportunity for
            people, businesses and communities
          </p>
        </div>
      </div>
    </section>
    
  </span>

  {/*
   <!-- ========================== -->
<!--==== About us=======-->
<!-- ========================== --> 
*/}
<span id="barchangebyhover6-section">
<section>
  <div className="container mx-auto max-w-6xl px-2 my-28" id="section7">
    <div className="grid lg:grid-cols-12 text-center">
      <div className="lg:col-span-12 flex justify-center p-2">
        <Image src={HeadingDivider} 
        alt="bar image" 
        />
      </div>
      <h3
        className="lg:col-span-12 lg:text-5xl md:text-4xl  sm:text-4xl text-4xl font-medium tungstenw05-medium text-[#000]"
      >
        About us
      </h3>
      <p
        className="lg:col-span-12 lg:text-4xl md:text-xl sm:text-xl text-xl font-medium tungstenw05-medium text-[#7e7e7e] my-4 px-10"
      >
        A global leader in next-generation digital services and consulting
      </p>
    </div>

    <div className="grid lg:grid-cols-12 pt-10">
      <div
        className="lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 text-center my-6"
      >
        <span className="text-6xl">56<span>+</span></span>
        <p className="text-sm text-[#333] font-normal my-auto mx-0">
          countries where we have trusting clients
        </p>
      </div>
      <div
        className="lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 text-center my-6"
      >
        <span className="text-6xl"><span>US$</span>18.38</span>
        <p className="text-sm text-[#333] font-normal my-auto mx-0">
          billion total revenue (LTM)
        </p>
      </div>
      <div
        className="lg:col-span-4 md:col-span-12 sm:col-span-12 col-span-12 text-center my-6"
      >
        <span className="text-6xl">5,575,490<span>+</span></span>
        <p className="text-sm text-[#333] font-normal my-auto mx-0">
          Training (days) conducted for employees, globally
        </p>
      </div>
    </div>

    <div className="grid lg:grid-cols-12 grid-rows-6 h-auto my-20">
      <div
        className="row-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 bg-[#df9926]"
      >
        <h4 className="font-black text-4xl pt-0 mt-10 mx-6">In the news</h4>
        <div className="mx-6 bg-[#c28b32] pt-[0.5px]"></div>

        <div className="text-[#000] text-lg font-medium my-4 pr-7 mx-6 flex">
          <p >
            Infosys Onboards Tennis Icon Rafael Nadal as Ambassador for the
            Brand and Infosys’ Digital Innovation
          </p>
          <i className="fa-solid fa-arrow-right-long text-[#000] px-3 text-xl"></i>
        </div>

        <div className="mx-6 bg-[#c28b32] pt-[0.5px]"></div>
        <div className="text-[#000] text-lg font-medium my-4 pr-7 mx-6 flex">
          <p >
            Infosys Onboards Tennis Icon Rafael Nadal as Ambassador for the
            Brand and Infosys’ Digital Innovation
          </p>
          <i className="fa-solid fa-arrow-right-long text-[#000] px-3 text-xl"></i>
        </div>
        <div className="mx-6 bg-[#c28b32] pt-[0.5px]"></div>

        <div className="text-[#000] text-lg font-medium my-4 pr-7 mx-6 flex">
          <p >
            Infosys Onboards Tennis Icon Rafael Nadal as Ambassador for the
            Brand and Infosys’ Digital Innovation
          </p>
          <i className="fa-solid fa-arrow-right-long text-[#000] px-3 text-xl"></i>
        </div>

        <div
          className="text-[#000] text-lg font-medium my-4 pr-7 mx-6 flex bg-[#e3a74d]"
        >
          <strong className="p-8"
            >Launched today: Infosys Topaz - An AI-first offering to accelerate
            business value for global enterprises using generative AI</strong
          >
        </div>
      </div>

      <div
        className="lg:row-span-3 md:row-span-3 sm:row-span-3 row-span-6 lg:col-span-3 md:col-span-3 sm:col-span-6  col-span-12 bg-[url('sources/images/quarter-results-q1fy24-thumb.jpg')] bg-no-repeat flex justify-end items-baseline flex-col sm:h-[20rem] h-[20rem] lg:bg-cover md:bg-cover sm:bg-cover bg-cover"
      >
        <h4 className="text-[#fff] font-bold text-2xl mb-3 px-2">
          Infosys Q1 FY24 Results - Archived Webcast
        </h4>
        <span className="text-[#ffff] px-2">july 20,2023</span>
      </div>
      <div
        className="lg:row-span-3 md:row-span-3 sm:row-span-3 row-span-6  lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12 bg-[url('sources/images/cloud-applications-research.jpg')] bg-no-repeat  flex justify-end items-baseline flex-col sm:h-[20rem] h-[20rem] lg:bg-cover md:bg-cover sm:bg-cover bg-cover "
      >
        <h4 className="text-[#fff] font-bold text-2xl mb-3 px-2">
          Infosys Q1 FY24 Results - Archived Webcast
        </h4>
        <span className="text-[#ffff] px-2">july 20,2023</span>
      </div>
      <div
        className="lg:row-span-3 md:row-span-3 sm:row-span-3 row-span-6  lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12 bg-[url('sources/images/esg-thumb.jpg')] bg-no-repeat flex justify-end items-baseline flex-col sm:h-[20rem] h-[20rem] lg:bg-cover md:bg-cover sm:bg-cover bg-cover"
      >
        <h4 className="text-[#fff] font-bold text-2xl mb-3 px-2">
          Infosys Q1 FY24 Results - Archived Webcast
        </h4>
        <span className="text-[#ffff] px-2">july 20,2023</span>
      </div>
      <div
        className="lg:row-span-3 md:row-span-3 sm:row-span-3 row-span-6  lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12 bg-[url('sources/images/future-work2023-thumb.jpg')] bg-no-repeat flex justify-end items-baseline flex-col sm:h-[20rem] h-[20rem] lg:bg-cover md:bg-cover sm:bg-cover bg-cover"
      >
        <h4 className="text-[#fff] font-bold text-2xl mb-3 px-2">
          Infosys Q1 FY24 Results - Archived Webcast
        </h4>
        <span className="text-[#ffff] px-2">july 20,2023</span>
      </div>
    </div>
  </div>
</section>
</span>


{/* 
<!-- ========================== -->
<!--==== Investor=======-->
<!-- ========================== --> 
*/}
<span id="barchangebyhover7-section">
<section>
  <div className="container mx-auto max-w-6xl px-2 my-28" id="section8">
    <div className="grid lg:grid-cols-12 text-center">
      <div className="lg:col-span-12 flex justify-center p-2">

        
            <Image
            src={HeadingDivider} 
            alt="bar image" 
            />
        

        
      </div>
      <h3
        className="lg:col-span-12 lg:text-5xl md:text-4xl  sm:text-4xlf text-4xl ont-medium tungstenw05-medium text-[#000]"
      >
        Investors
      </h3>
      <p
        className="lg:col-span-12 lg:text-4xl md:text-xl sm:text-xl text-xl font-medium tungstenw05-medium text-[#7e7e7e] my-4 px-10"
      >
        Maximizing shareholder value with good corporate governance
      </p>
    </div>

    <div className="grid lg:grid-cols-12 pt-10 h-auto">

      <div className=" lg:col-span-8 md:col-span-8 sm:col-span-12 col-span-12">
        <div className="zoom-effect-container">
          <div className="image-card">
            <div
            className=" bg-[url('sources/images/annual-report-2023-mob.jpg')] bg-no-repeat bg-cover flex justify-end items-baseline flex-col h-[23rem]"
          >

          <h4 className="text-[#fff] font-bold text-3xl m-9">
            Infosys Q1 FY24 Results - Archived Webcast
          </h4>
        </div>
          </div>
        </div>

      </div>
      


      <div
        className="lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12 bg-[#fff]"
      >
        <h4 className="font-black text-4xl pt-0 mt-10 mx-6">Investor central</h4>

        <div className="text-[#000] text-lg font-medium my-4 pr-7 mx-6">
          <span className="font-normal text-sm text[#3f3f3f] mb-1">RESULTS</span>
          <p className="text-[#000] text-lg font-medium mb-1 pr-8">
            First Quarter FY24
          </p>
        </div>

        <div className="mx-6 bg-[#e1e1e1] pt-[0.5px]"></div>
        <div className="text-[#000] text-lg font-medium my-4 pr-7 mx-6">
          <span className="font-normal text-sm text[#3f3f3f] mb-1">RESULTS</span>
          <p className="text-[#000] text-lg font-medium mb-1 pr-8">
            First Quarter FY24
          </p>
        </div>
        <div className="mx-6 bg-[#e1e1e1] pt-[0.5px]"></div>

        <div className="text-[#000] text-lg font-medium my-4 pr-7 mx-6">
          <span className="font-normal text-sm text[#3f3f3f] mb-1">RESULTS</span>
          <p className="text-[#000] text-lg font-medium mb-1 pr-8">
            First Quarter FY24
          </p>
        </div>
        <div className="mx-6 bg-[#e1e1e1] pt-[0.5px]"></div>

        <a href="#" className="text-[#0076ff] text-sm font-bold my-4 pr-7 mx-6"
          >View All</a
        >
      </div>
    </div>
  </div>
</section>
</span>


{/* 
<!-- ========================== -->
<!--==== careers=======-->
<!-- ========================== --> 
*/}
<span id="barchangebyhover8-section">
<section>
  <div className="container mx-auto max-w-6xl px-2 my-28" id="section9">
    <div className="grid lg:grid-cols-12 text-center">
      <div className="lg:col-span-12 flex justify-center p-2">
        <Image 
         src={HeadingDivider} 
        alt="bar image" />
      </div>
      <h3
        className="lg:col-span-12 lg:text-5xl md:text-4xl sm:text-4xl text-4xl font-medium tungstenw05-medium text-[#000]"
      >
        Careers
      </h3>
      <p
        className="lg:col-span-12 lg:text-4xl md:text-xl sm:text-xl text-xl font-medium tungstenw05-medium text-[#7e7e7e] my-4 px-10"
      >
        Every Infoscion is the navigator of our clients’ digital transformation
      </p>
    </div>


    <div
      className="relative lg:grid-rows-6 grid grid-cols-12 pt-10 lg:h-[500px] md:h-[500px] sm:h-[275px] h-[275px] bg-[url('sources/images/careers-video-img.jpg')] bg-no-repeat bg-cover"
    >
      <div className="lg:col-span-6 lg:row-span-3 absolute bottom-0 p-14 pl-9">
        <span
          className="text-2xl font-light text-[#fff] sm:hidden lg:block md:block hidden"
          >Life of Infosys</span
        >
      </div>

      <div
        className="lg:col-span-6 lg:row-span-3 absolute left-[40rem] bottom-[-50px] testinominal-card"
      >
        <div
          className="bg-[#f3f3f3] text-[#000] lg:max-w-[420px] md:max-w-[420px] sm:max-w-[639px] max-w-[639px] text-left p-10 flex justify-center items-end"
        >
        
          <div className="w-20 h-20">
            <Image 
            src={PeopleComment} 
            alt="people comment" />
          </div>

          <div className="">
            <span className="text-[#000] text-sm mb-3">What our people say</span>
            <p className="text-base font-normal">
              "Infosys is on an Amazing journey of transformation"
              <br />
              - Casfasdf-sdf
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-24">
      <h4 className="lg:text-3xl md:text-xl sm:text-xl text-xl text-[#3f3f3f] mb-4">
        Find opportunities right for you
      </h4>
      <a href="#" className="sec-btn">Explore Careers</a>
    </div>
  </div>
</section>
</span>




{/* 
<!-- ========================== -->
<!--==== Lets help you=======-->
<!-- ========================== -->
 */}
<span id="barchangebyhover9-section">
<section className="bg-[#963596]" id="section10">
  <div className="container mx-auto max-w-6xl px-2 mt-28 py-24 md:px-5 sm:px-2">
    <div className="grid grid-cols-12">
      <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
        <div className="grid grid-cols-2">
          <a href="#">
            <div
              className="border border-[#D0B5D5] text-center  text-2xl font-semibold text-[#fff] hover:bg-[#D0B5D5] hover:text-[#000] min-h-[11rem]
              flex justify-center items-center"
            >
              Americas
            </div>
          </a>
          <a href="#">
            <div
              className="border border-[#D0B5D5] text-center text-2xl font-semibold  text-[#fff] hover:bg-[#D0B5D5] hover:text-[#000] min-h-[11rem]
              flex justify-center items-center"
            >
              Asia Pacific
            </div>
          </a>
          <a href="#">
            <div
              className="border border-[#D0B5D5] text-center text-2xl font-semibold  text-[#fff] hover:bg-[#D0B5D5] hover:text-[#000] min-h-[11rem]
              flex justify-center items-center"
            >
              Europe
            </div>
          </a>
          <a href="#">
            <div
              className="border border-[#D0B5D5] text-center text-2xl font-semibold  text-[#fff] hover:bg-[#D0B5D5] hover:text-[#000] min-h-[11rem] px-0 flex justify-center items-center"
            >
              Middle East and Africe
            </div>
          </a>
        </div>
      </div>
      <div
        className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12 lg:px-14 md:px-0 md:my-5 sm:my-5"
      >
        <h4 className="lg:text-7xl md:text-4xl sm:text-4xl text-4xl font-black text-[#fff]">
          Let's help you navigate your next
        </h4>
        <div className="my-9">
          <a href="#" className="sec-btn">Contact Us</a>
        </div>
      </div>
    </div>
  </div>
</section>
</span>
{/* 
<!-- ========================== -->
<!--==== Footer=======-->
<!-- ========================== --> 
*/}

<section className="bg-[#F8F8F8] pt-20 pb-10">
  <div className="container mx-auto max-w-6xl">
    <div className="grid grid-cols-12 bg-[#F8F8F8]">
      <div className="lg:col-span-2 md:col-span-2 sm:col-span-6 col-span-6">
        <h6 className="text-[#00000] text-xl font-black">Company</h6>
        <ul className="mt-2">
          <li
            className="text-base text-[#000] py-2"
            className="text-base text-[#000] py-2"
          >
            <a href="#">Navigate your next</a>
          </li>
          <li className="text-base text-[#000] py-2"><a href="">About Us</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">Careers</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">ESG</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">Investors</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">Newsroom</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">Alumni</a></li>
        </ul>
      </div>

      <div className="lg:col-span-2 md:col-span-2 sm:col-span-6 col-span-6">
        <h6 className="text-[#00000] text-xl font-black">Subsidiaries</h6>
        <ul className="mt-2">
          <li className="text-base text-[#000] py-2">
            <a href="#">Navigate your next</a>
          </li>
          <li className="text-base text-[#000] py-2"><a href="">About Us</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">Careers</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">ESG</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">Investors</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">Newsroom</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">Alumni</a></li>
        </ul>
      </div>

      <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-6">
        <h6 className="text-[#00000] text-xl font-black">Programs</h6>
        <ul className="mt-2">
          <li className="text-base text-[#000] py-2">
            <a href="#">Navigate your next</a>
          </li>
          <li className="text-base text-[#000] py-2"><a href="">About Us</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">Careers</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">ESG</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">Investors</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">Newsroom</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">Alumni</a></li>
        </ul>
      </div>

      <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-6">
        <h6 className="text-[#00000] text-xl font-black">Support</h6>
        <ul className="mt-2">
          <li className="text-base text-[#000] py-2">
            <a href="#">Navigate your next</a>
          </li>
          <li className="text-base text-[#000] py-2"><a href="">About Us</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">Careers</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">ESG</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">Investors</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">Newsroom</a></li>
          <li className="text-base text-[#000] py-2"><a href="#">Alumni</a></li>
        </ul>
      </div>


      



      <div className="lg:col-span-2 md:col-span-2 sm:col-span-6 col-span-6">
        <h6 className="text-[#00000] text-xl font-black">Connect with us</h6>
        <ul className="flex">
          <li className="px-2 py-1">
            <a href="#"><FontAwesomeIcon icon={faX} /></a>
          </li>
          <li className="px-2 py-1">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          </li>
          <li className="px-2 py-1">
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </li>
          <li className="px-2 py-1">
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section className="my-3">
  <div className="container mx-auto max-w-6xl">
    <div className="grid grid-cols-12">
      <div className="col-span-6 text-[#C5C5C5]">
        Copyright © 2023 By SolutionSurface
      </div>
      <div className="col-span-6"></div>
    </div>
  </div>
</section>


 </>      
           
  )
}


