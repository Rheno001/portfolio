import React from 'react'
import NFT from '../assets/NFT.png'
import MIX from '../assets/mixbistro.png'
import TGM from '../assets/great.png'
import SAAS from '../assets/saas.png'
import arrow from '../assets/rightarrow.png'

function projects() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8 py-6 mt-[20px]'>
        <div className="one">
            <div className='image bg-[#DDE0DE] p-10'>
                <img src={MIX} alt="Projects one" className='h-auto'/>
            </div>
            <div className='texts flex justify-between'>
                <div className='text-[#EDFFFA]'>
                    <h3 className='text-[45px]'>Mixbistro</h3>
                    <p className='text-[20px]'>Web3</p>
                </div>
                <div className='flex items-end'>
                    <button className='flex p-2 items-center justify-center mr-[20px]'><a href="" className='text-[15px] text-[#EDFFFA] flex items-center'>View Site <img src={arrow} alt="right pointing arrow" className='w-[14.67px] h-[11px] ml-[15px]'/></a></button>
                    <a href="" className='border-[2px] border-[#EDFFFA] p-2 text-[12px] md:text-[15px] text-[#EDFFFA]'>Read Case Study</a>
                </div>
            </div>
        </div>
        <div className="two">
            <div className='image bg-[#DDE0DE] p-10'>
                <img src={NFT} alt="Projects one" />
            </div>
            <div className='texts flex justify-between'>
                <div className='text-[#EDFFFA]'>
                    <h3 className='text-[45px]'>MintNFT</h3>
                    <p className='text-[20px]'>Web3</p>
                </div>
                <div className='flex items-end'>
                    <button className='flex p-2 items-center justify-center mr-[20px]'><a href="https://mintnft-vert.vercel.app/" className='text-[15px] text-[#EDFFFA] flex items-center'>View Site <img src={arrow} alt="right pointing arrow" className='w-[14.67px] h-[11px] ml-[15px]'/></a></button>
                    <a href="" className='border-[2px] border-[#EDFFFA] p-2 text-[12px] md:text-[15px] text-[#EDFFFA]'>Read Case Study</a>
                </div>
            </div>
        </div>
        <div className="three">
            <div className='image bg-[#DDE0DE] p-10'>
                <img src={TGM} alt="Projects one" />
            </div>
            <div className='texts flex justify-between'>
                <div className='text-[#EDFFFA]'>
                    <h3 className='text-[45px]'>$TGM</h3>
                    <p className='text-[20px]'>Web3</p>
                </div>
                <div className='flex items-end'>
                    <button className='flex p-2 items-center justify-center mr-[20px]'><a href="https://telgram-great-minds.vercel.app/" className='text-[15px] text-[#EDFFFA] flex items-center'>View Site <img src={arrow} alt="right pointing arrow" className='w-[14.67px] h-[11px] ml-[15px]'/></a></button>
                    <a href="" className='border-[2px] border-[#EDFFFA] p-2 text-[12px] md:text-[15px] text-[#EDFFFA]'>Read Case Study</a>
                </div>
            </div>
        </div>
        <div className="four">
            <div className='image bg-[#DDE0DE] p-10'>
                <img src={SAAS} alt="Projects one" />
            </div>
            <div className='texts flex justify-between'>
                <div className='text-[#EDFFFA]'>
                    <h3 className='text-[45px]'>Saasify</h3>
                    <p className='text-[20px]'>Web3</p>
                </div>
                <div className='flex items-end'>
                    <button className='flex p-2 items-center justify-center mr-[20px]'><a href="https://saasify-theta.vercel.app/" className='text-[15px] text-[#EDFFFA] flex items-center'>View Site <img src={arrow} alt="right pointing arrow" className='w-[14.67px] h-[11px] ml-[15px]'/></a></button>
                    <a href="" className='border-[2px] border-[#EDFFFA] p-2 text-[12px] md:text-[15px] text-[#EDFFFA]'>Read Case Study</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default projects