import React, { useState } from 'react';


import Testinominal1 from '../assets/Images/testimonial-1.jpg'
import Testinominal2 from '../assets/Images/testimonial-2.jpg'
import Testinominal3 from '../assets/Images/testimonial-3.jpg'
import Testinominal4 from '../assets/Images/testimonial-4.jpg'

import Testinominal5 from '../assets/Images/testimonial-5.jpg'
import Testinominal6 from '../assets/Images/testimonial-6.jpg'
import Testinominal7 from '../assets/Images/testimonial-7.jpg'
import Testinominal8 from '../assets/Images/testimonial-8.jpg'



function CustomerTestinominal() {
const [comment, setcomment] = useState("")
const [title, settitle] = useState("")

const [id, setid] = useState(0)

const onclickimagethumb = (num) => {
setid(num)

console.log(num)

}



const changethecomment = (com) =>{
setcomment(com)
}

const changethetitle = (tit) =>{
  settitle(tit)
  }


  return (
    <>

    <section className='my-28 bg-[#F8F9FC] py-28'>
    <div className='container mx-auto max-w-6xl px-2'>
    <div className='grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 grid-cols-12'>

    <div className='lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12'>
    <h3 className='text-center lg:text-4xl md:text-4xl sm:text-2xl text-2xl mb-2 font-light text-[#1f1f25]'>{comment}</h3>

    <p className='text-center text-lg font-light text-[#8c8c8c] my-14'><span className='text-[#f9004d] font-normal'>{title}</span>- COO, AMERIMAR ENTERPRISES, INC.</p>

    
    </div>

    <ul className='col-span-12 flex justify-center '>
<li className='px-2 relatve'> 
<span className='rounded-lg bg-[#f9004d] absolute w-[10px] h-[10px] hidden  ' id="1"></span>

<img src={Testinominal1} alt="image of testinominal" onClick={() => {changethecomment("Phenomenal Customer Service! I'm just starting out with the team helped me so much with integrating this into my website. Highly recommend."); changethetitle("Bashir"); onclickimagethumb(1); }}   className='cursor-pointer'/> 


 </li>

<li className='px-2'>
<img src={Testinominal2} alt="image of testinominal" onClick={() => {changethecomment("Exactly what I was looking for. Saved me a bit of time using this template to start my project.İt' s pretty good."); changethetitle("Robbin");}} className='cursor-pointer'/>
</li>

<li className='px-2'>
<img src={Testinominal3} alt="image of testinominal" onClick={() => {changethecomment("The best customer support I've ever received on Envato. The author is absolutely great and he's always so fast to answer. The template is amazing and very flexible. Thank you!!"); changethetitle("Yohoma");}} className='cursor-pointer'/>
</li>

<li className='px-2'>
<img src={Testinominal4} alt="image of testinominal" onClick={() => {changethecomment("Product is of good quality and easy to use, We are also the author on Envato and our requirement is very high. I hired the team to do some custom work and they finished it on time."); changethetitle("Palak");}}className='cursor-pointer'/>
</li>


<li className='px-2'>
<img src={Testinominal5} alt="image of testinominal" onClick={() => {changethecomment("Affordable and excellent quality work. If you need a high-quality front-end product, you should consider the Rainbow team, they are quite patient and work great."); changethetitle("Jannati");}} className='cursor-pointer'/>
</li>

<li className='px-2'>
<img src={Testinominal6} alt="image of testinominal" onClick={() => {changethecomment("Simply amazing support. Top Seller in terms of support. Thanks a lot. I will keep buying your products. amazing work bug free... thanks a lot"); changethetitle("Raftar");}} className='cursor-pointer'/>
</li>


<li className='px-2'>
<img src={Testinominal7} alt="image of testinominal" onClick={() => {changethecomment("This is a great theme and I'd definitely recommend it. Very flexible and the code for the theme is very straightforward and easy to fix up to what you need if you understand what you're doing."); changethetitle("Samena");}} className='cursor-pointer'/>
</li>

<li className='px-2'>
<img src={Testinominal8} alt="image of testinominal" onClick={() => {changethecomment("Excellent design template and easy to customize if you know React. Thank you for your quick response. Good value. That convinced me! Thanks!"); changethetitle("Ghurki");}} className='cursor-pointer'/>
</li>

    </ul>



</div>
</div>
    </section>
    </>
  )
}

export default CustomerTestinominal
