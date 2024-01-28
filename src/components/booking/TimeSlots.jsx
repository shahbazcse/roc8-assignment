import React, { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { extractTimeAMPM } from '../../utils/utils';

export const TimeSlots = () => {
    const { state } = useContext(AppContext);

    const options = {
        weekday: "long",
        month: "short",
        day: "numeric",
    };

    const date = state.selectedDate ? state.selectedDate?.toLocaleDateString("en-US", options) : "";

    return (
        <div className='flex flex-col justify-start gap-4 px-12 py-4 h-full w-full divide-y-2'>
            <div className='flex flex-col gap-2'>
                <div className='text-gray-500 font-bold text-[1.4vh]'>SELECT FROM VARIANTS</div>
                <select className='mx-18 my-2 p-3 w-full border border-2 rounded-lg bg-gray-50 text-green-700 font-bold'>
                    <option value="30">30 Min</option>
                    <option value="45">45 Min</option>
                    <option value="60">60 Min</option>
                </select>
            </div>
            <div className='flex flex-col gap-2 pt-3'>
                <div className='text-gray-500 font-bold text-[1.4vh]'>{date} - AVAILABLE SLOTS</div>
                <div className='flex flex-col justify-start items-center gap-4 py-1 px-2 min-h-[16vh] h-fit sm:max-h-[38vh] sm:overflow-y-scroll'>
                    {state.timeslots.length ? (
                        state.timeslots[0].slots.map(({ start_time, end_time }, index) => (
                            <div key={index} className='flex justify-evenly items-center w-full px-4 py-2 border border border-[#378760] text-green-700 hover:bg-green-50 font-bold rounded-lg cursor-pointer hover:shadow-sm'>
                                <div className='tracking-wide'>{extractTimeAMPM(start_time)} - {extractTimeAMPM(end_time)}</div>
                                {false && <div></div>}
                            </div>
                        ))
                    ) : (
                        <div className='mt-6 md:mt-auto text-gray-500'>No Slots Available</div>
                    )}
                </div>
            </div>
        </div>
    )
}
