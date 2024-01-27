import React, { useContext, useEffect } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Calendar } from './booking/Calendar';
import { TimeSlots } from './booking/TimeSlots';
import { getAllSlots } from "../services/BookingService";
import { AppContext } from "../contexts/AppContext";

export const Booking = () => {
    const { state, dispatch } = useContext(AppContext);

    const handleSubmit = async () => {
        const response = await getAllSlots(state.selectedDate);
        dispatch({ type: "UPDATE_TIMESLOTS", payload: response });
        console.log(response);
    }

    useEffect(() => {
        (async () => {
            const curr = new Date();
            dispatch({ type: "SELECT_DATE", payload: curr });
            const response = await getAllSlots(curr);
            dispatch({ type: "UPDATE_TIMESLOTS", payload: response });
        })();
    }, []);

    return (
        <div className='flex flex-col justify-center items-center shadow-md w-[95%] xl:w-[50%] mx-auto mt-[6vh] sm:mt-[10vh] rounded-xl'>
            <div className='flex flex-col md:flex-row h-full min-h-[56vh] lg:h-[48vh] w-full'>
                <Calendar />
                <TimeSlots />
            </div>
            <div className='flex justify-between items-center px-[4vh] h-[9vh] w-full bg-[#378760] rounded-b-xl'>
                <div className='text-white font-bold text-[1.4vh]'>POWERED BY <span className='underline underline-offset-2 cursor-pointer'>APPOINTO</span></div>
                <div onClick={handleSubmit} className='flex justify-center items-center gap-2 px-8 py-2.5 rounded-md bg-white cursor-pointer hover:shadow-lg'>
                    <div className='text-gray-700 font-bold'>Next</div>
                    <MdKeyboardArrowRight className='h-7 w-7 text-[#378760]' />
                </div>
            </div>
        </div>
    );
};
