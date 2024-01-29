import React, { useEffect, useState } from 'react';
import { CalendarMain } from "./CalendarMain";

export const Calendar = () => {
    const [service, setService] = useState({
        name: "",
        timezone: ""
    });

    useEffect(() => {
        setService((prev) => ({
            ...prev,
            name: "Test Service",
            timezone: "Asia/Calcutta"
        }));
    }, []);
    return (
        <div className='flex flex-col justify-center gap-4 p-7 h-[33rem] lg:h-full w-full bg-[#EBEBF0] rounded-t-xl md:rounded-tl-xl md:rounded-tr-[0]'>
            <div className='font-[roboto] tracking-wider'>
                <div className='text-3xl text-gray-800 font-bold'>{service.name}</div>
                <div className='text-gray-600 text-md'><span className='font-bold'>Timezone:</span> {service.timezone}</div>
            </div>
            <CalendarMain />
        </div>
    )
}
