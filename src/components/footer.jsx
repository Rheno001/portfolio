import React from 'react'
import git from '../assets/githublogo.png'
import twit from '../assets/Twitter.png'
import text from '../assets/footertext.png'
import contact from '../assets/contact.png'
import rightarrow from '../assets/rightarrow.png'

function footer() {
  return (
    <div className='footerbg pt-[50px] pb-[30px] px-4 sm:px-6 lg:px-17'>
        <div>
           <img src={text} alt="Footer text" />
        </div>
        <p className='mt-[20px] text-[15px] md:text-[30px] font-normal text-[#fff]'>Got a project in mind or just want to talk code and music? Let’s connect and build something great together!</p>
        <div className='flex items-center justify-start mt-[20px]'><img src={rightarrow} alt="Right pointing arrow" className='w-[25px] md:w-[30px]' /><p className='text-[20px] md:text-[35px] text-[#EDFFFA] ml-[10px] md:ml-[20px] font-myungjo'>renfredreuben@gmail.com</p></div>
        <div className='flex items-center justify-end mt-[15px]'>
            <a href="https://github.com/Rheno001">
               <img src={git} alt="Github Logo" className='mx-[10px] h-[35px] md:h-[52px] hover:scale-120 transition-all'/>
            </a>
            <a href="">
                <img src={twit} alt="X Logo" className='mx-[10px] h-[35px] md:h-[52px] hover:scale-120 transition-all'/>
            </a>
            
        </div>
        <img src={contact} alt="Contact Image" className='mt-[25px]' />
    </div>
  )
}

export default footer