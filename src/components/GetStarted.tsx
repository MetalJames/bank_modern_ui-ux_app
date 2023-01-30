import styles from '../style';
import { arrowUp } from '../assets';
import '../index.css';

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full  cursor-pointer testButton`}>
        <span className={`bg_height`}></span>
        <span className={`button`}>
        <div className={`${styles.flexCenter} flex-col`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>Get</p>
                <img src={arrowUp} alt="arrowUp" className='w-[23px] h-[23px] object-contain' />
            </div>
            <p className='font-poppins font-medium text-[18px] leading-[23px]'>Started</p>
        </div>
        </span>
    </div>
);

export default GetStarted