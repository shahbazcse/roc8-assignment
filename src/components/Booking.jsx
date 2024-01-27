import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Calendar } from './booking/Calendar';
import { TimeSlots } from './booking/TimeSlots';

export const Booking = () => {
    return (
        <div className='flex flex-col justify-center items-center shadow-md w-[95%] xl:w-[50%] mx-auto mt-[6vh] sm:mt-[10vh] rounded-xl'>
            <div className='flex flex-col md:flex-row h-full min-h-[56vh] lg:h-[48vh] w-full'>
                <Calendar />
                <TimeSlots />
            </div>
            <div className='flex justify-between items-center px-[4vh] h-[9vh] w-full bg-[#378760] rounded-b-xl'>
                <div className='text-white font-bold text-[1.4vh]'>POWERED BY <span className='underline underline-offset-2 cursor-pointer'>APPOINTO</span></div>
                <div className='flex justify-center items-center gap-2 px-8 py-2.5 rounded-md bg-white cursor-pointer hover:shadow-lg'>
                    <div className='text-gray-700 font-bold'>Next</div>
                    <MdKeyboardArrowRight className='h-7 w-7 text-[#378760]' />
                </div>
            </div>
        </div>
    );
};
