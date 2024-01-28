import React, { useEffect, useState } from 'react';
import { CalendarMain } from "../booking/calendar/CalendarMain";

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
        <div className='flex flex-col justify-center gap-4 p-[3vh] h-full w-full bg-[#EBEBF0] rounded-t-xl md:rounded-tl-xl md:rounded-tr-[0]'>
            <div className='font-[roboto] tracking-wide'>
                <div className='text-[2.8vh] text-gray-800 font-bold'>{service.name}</div>
                <div className='text-gray-600 text-[1.7vh]'><span className='font-bold'>Timezone:</span> {service.timezone}</div>
            </div>
            <CalendarMain />
        </div>
    )
}
