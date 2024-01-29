import React, { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { extractTimeAMPM, getCurrentDate } from "../../utils/utils";
import { FaRegCircleCheck } from "react-icons/fa6";

export const TimeSlots = () => {
    const { state, dispatch } = useContext(AppContext);

    const [selectDuration, setSelectDuration] = useState("30");

    const handleSelectSlot = (slotDate, start_time, end_time) => {
        const selectSlot = {
            duration: selectDuration,
            slotDate,
            start_time,
            end_time,
        };
        dispatch({ type: "SELECT_SLOT", payload: selectSlot });
    };

    const isSelected = (start_time, end_time) =>
        state.selectedSlot.start_time === start_time &&
        state.selectedSlot.end_time === end_time;

    const slotStyle = (start_time, end_time) => {
        if (isSelected(start_time, end_time)) {
            return "bg-[#378760] text-white justify-between";
        } else {
            return "text-green-700 hover:bg-green-100 justify-center";
        }
    };

    return (
        <div className="flex flex-col justify-start gap-4 px-12 py-4 h-full w-full divide-y-2">
            <div className="flex flex-col gap-2">
                <div className="text-gray-700 font-bold text-xs">
                    SELECT FROM VARIANTS
                </div>
                <select
                    value={selectDuration}
                    onChange={(e) => setSelectDuration(e.target.value)}
                    className="mx-18 my-2 p-3 w-full border border-2 rounded-lg bg-gray-50 text-green-700 font-bold"
                >
                    <option value="30">30 Min</option>
                    <option value="45">45 Min</option>
                    <option value="60">60 Min</option>
                </select>
            </div>
            <div className="flex flex-col gap-2 pt-3">
                <div className="text-gray-700 font-bold text-xs">
                    {getCurrentDate(state.selectedDate)} - AVAILABLE SLOTS
                </div>
                <div className="flex flex-col justify-start items-center gap-4 py-1 px-2 min-h-[10rem] h-fit sm:max-h-[22rem] sm:overflow-y-scroll">
                    {state.timeslots.length ? (
                        state.timeslots[0].slots.map(({ start_time, end_time }, index) => (
                            <div
                                key={index}
                                onClick={() =>
                                    handleSelectSlot(state.selectedDate, start_time, end_time)
                                }
                                className={`${slotStyle(
                                    start_time,
                                    end_time
                                )} flex items-center w-full px-4 py-2 border border-[#378760] font-bold rounded-lg cursor-pointer hover:shadow-sm duration-500`}
                            >
                                <div className="tracking-wide">
                                    {extractTimeAMPM(start_time)} - {extractTimeAMPM(end_time)}
                                </div>
                                {isSelected(start_time, end_time) && (
                                    <FaRegCircleCheck className="h-6 w-6" />
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="mt-6 md:mt-auto text-gray-500">
                            No Slots Available
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
