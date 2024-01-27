import React from 'react'

export const TimeSlots = () => {
    const date = "THURSDAY, DEC 2";
    return (
        <div className='flex flex-col justify-start gap-4 px-12 py-4 h-full w-full divide-y-2'>
            <div className='flex flex-col gap-2'>
                <div className='text-gray-500 font-bold text-[1.4vh]'>SELECT FROM VARIANTS</div>
                <select className='mx-18 my-2 p-3 w-full border border-2 rounded-lg bg-gray-50 text-green-700 font-bold'>
                    <option value="30">30 Min</option>
                </select>
            </div>
            <div className='flex flex-col gap-2 pt-3'>
                <div className='text-gray-500 font-bold text-[1.4vh]'>{date} - AVAILABLE SLOTS</div>
                <div className='flex flex-col justify-start items-center gap-4 py-1 px-2 min-h-[16vh] h-fit sm:max-h-[38vh] sm:overflow-y-scroll'>
                    <div className='flex justify-evenly items-center w-full px-4 py-2 border border border-[#378760] text-green-700 hover:bg-green-50 font-bold rounded-lg cursor-pointer hover:shadow-sm'>
                        <div>Lorem ipsum dolor sit amet.</div>
                        {false && <div></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
