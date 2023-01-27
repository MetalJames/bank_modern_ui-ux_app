import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';
import '../index.css';

const GetStarted = () => (
    <div className={`${styles.flexCenter} 
    w-[140px] h-[140px] rounded-full  cursor-pointer
    testButton`}>
    {/* <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}> */}
        <span className={`bg_height`}></span>
        <span className={`button`}>
        <div className={`${styles.flexCenter} flex-col`}>
        {/* <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}> */}
            <div className={`${styles.flexStart} flex-row`}>
                <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
                    {/* <span className='hovered'>Get</span> */}
                    Get
                </p>
                <img src={arrowUp} alt="arrowUp" className='w-[23px] h-[23px] object-contain' />
            </div>
            <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                {/* <span className='hovered'>Started</span> */}
                Started
            </p>
        </div>
        </span>
    </div>
);

export default GetStarted



// this is orogonal stuff

{/* <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Get</span>
            </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Started</span>
        </p>
    </div>
  </div> */}