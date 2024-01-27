import React, { useEffect, useState } from 'react';
import { CalendarMain } from "../booking/calendar/CalendarMain";

export const Calendar = () => {
    const [service, setService] = useState({
        name: "",
        timezone: ""
    });

    useEffect(() => {
        setService({
            ...service,
            name: "Test Service",
            timezone: "Asia/Calcutta"
        });
    }, []);
    return (
        <div className='flex flex-col justify-center gap-4 p-[3vh] h-full w-full bg-[#EBEBF0] rounded-t-xl md:rounded-tl-xl md:rounded-tr-[0]'>
            <div>
                <div className='font-bold text-[2.6vh]'>{service.name}</div>
                <div className='text-gray-600 text-[1.5vh]'><span className='font-bold'>Timezone:</span> {service.timezone}</div>
            </div>
            <div className='min-h-[42vh] h-fit border-black border'>
                <CalendarMain />
            </div>
        </div>
    )
}
