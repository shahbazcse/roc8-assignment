import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Calendar } from './booking/Calendar';
import { TimeSlots } from './booking/TimeSlots';

export const Booking = () => {
    return (
        <div className='booking_box'>
            <div className='booking_main'>
                <div className='booking_main_top'>
                    <div className='main_left'>
                        <Calendar />
                    </div>
                    <div className='main_right'>
                        <TimeSlots />
                    </div>
                </div>
                <div className='booking_main_bottom'>
                    <div className='appointo_tag'>
                        POWERED BY <span className='tag_underline'>APPOINTO</span>
                    </div>
                    <div className='next_btn'>
                        <div>Next</div>
                        <MdKeyboardArrowRight className='next_icon' />
                    </div>
                </div>
            </div>
        </div>
    );
};
