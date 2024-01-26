import React, { useEffect, useState } from 'react'

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
    }, [service, setService]);
    return (
        <div className='calendar_box'>
            <div className='calendar_box_top'>
                <div className='service_name'>{service.name}</div>
                <div className='timezone'><span>Timezone:</span> {service.timezone}</div>
            </div>
            <div className='calendar_box_bottom'></div>
        </div>
    )
}
