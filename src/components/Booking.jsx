import React, { useContext, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Calendar } from "./booking/Calendar";
import { TimeSlots } from "./booking/TimeSlots";
import { getAllSlots, makeBooking } from "../services/BookingService";
import { AppContext } from "../contexts/AppContext";

export const Booking = () => {
    const {
        state: { selectedSlot },
        dispatch,
    } = useContext(AppContext);

    const handleBooking = () => {
        makeBooking(selectedSlot);
    };

    useEffect(() => {
        (async () => {
            const curr = new Date();
            dispatch({ type: "SELECT_DATE", payload: curr });
            const response = await getAllSlots(curr);
            dispatch({ type: "UPDATE_TIMESLOTS", payload: response });
        })();
    }, [dispatch]);

    return (
        <div className="pb-8 md:pb-0">
            <div className="flex flex-col justify-center items-center shadow-md w-[95%] 2xl:w-[50%] mx-auto mt-5 md:mt-24 rounded-xl">
                <div className="flex flex-col md:flex-row h-full lg:min-h-[33rem] lg:h-[30rem] w-full">
                    <Calendar />
                    <TimeSlots />
                </div>
                <div className="flex justify-between items-center px-10 h-24 w-full bg-[#378760] rounded-b-xl">
                    <div className="text-white font-bold text-sm">
                        POWERED BY{" "}
                        <span className="underline underline-offset-2 cursor-pointer">
                            APPOINTO
                        </span>
                    </div>
                    <div
                        onClick={handleBooking}
                        className={`flex justify-center items-center gap-2 px-8 py-2.5 rounded-lg text-gray-700 bg-white ${selectedSlot.slotDate !== ""
                            ? "cursor-pointer hover:shadow-xl hover:bg-gray-800 hover:text-white duration-500"
                            : "cursor-not-allowed"
                            }`}
                    >
                        <div className="font-bold">Next</div>
                        <MdKeyboardArrowRight className="h-7 w-7 text-[#378760]" />
                    </div>
                </div>
            </div>
        </div>
    );
};
