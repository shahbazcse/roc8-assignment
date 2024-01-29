import React, { useContext, useState } from "react";
import { AppContext, initialState } from "../../../contexts/AppContext";
import { formatDate } from "../../../utils/utils";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    getDay,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    parse,
    parseISO,
    startOfToday,
    startOfWeek,
} from "date-fns";
import { getAllSlots } from "../../../services/BookingService";

const meetings = [];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

let colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
];

export const CalendarMain = () => {
    const { dispatch } = useContext(AppContext);

    let today = startOfToday();
    let [selectedDay, setSelectedDay] = useState(today);
    let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
    let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

    let days = eachDayOfInterval({
        start: startOfWeek(firstDayCurrentMonth),
        end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
    });

    function previousMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
    }

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
    }

    const handleSelectDate = async (day) => {
        setSelectedDay(day);
        dispatch({ type: "SELECT_DATE", payload: day });
        dispatch({ type: "UPDATE_TIMESLOTS", payload: initialState.timeslots });
        const response = await getAllSlots(formatDate(day));
        if (response.status === 200) {
            dispatch({ type: "UPDATE_TIMESLOTS", payload: response.data });
            dispatch({ type: "SELECT_SLOT", payload: initialState.selectedSlot });
        } else {
            dispatch({ type: "SET_ERROR", payload: response.message })
        }
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-2 border-gray-300 font-bold divide-y">
            <div className="flex justify-between items-center mx-6 py-4">
                <button
                    type="button"
                    onClick={previousMonth}
                    className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                >
                    <span className="sr-only">Previous month</span>
                    <MdArrowBackIos className="w-7 h-7 text-[#378760] pl-2 rounded-full hover:bg-gray-200" aria-hidden="true" />
                </button>
                <div className="font-bold text-lg text-gray-900 text-center">
                    {format(firstDayCurrentMonth, "MMMM yyyy").toLocaleUpperCase()}
                </div>
                <button
                    onClick={nextMonth}
                    type="button"
                    className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                >
                    <span className="sr-only">Next month</span>
                    <MdArrowForwardIos className="w-7 h-7 text-[#378760] rounded-full p-1 hover:bg-gray-200" aria-hidden="true" />
                </button>
            </div>
            <div className="px-3 md:px-2">
                <div className="grid grid-cols-7 mt-4 text-md leading-6 text-center text-[#378760]">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thr</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div className="grid grid-cols-7 mt-2 text-md">
                    {days.map((day, dayIdx) => (
                        <div
                            key={day.toString()}
                            className={classNames(
                                dayIdx === 0 && colStartClasses[getDay(day)],
                                "py-1.5"
                            )}
                        >
                            <button
                                type="button"
                                onClick={() => handleSelectDate(day)}
                                className={classNames(
                                    isEqual(day, selectedDay) && "text-white",
                                    !isEqual(day, selectedDay) &&
                                    isToday(day) &&
                                    "text-red-500",
                                    !isEqual(day, selectedDay) &&
                                    !isToday(day) &&
                                    isSameMonth(day, firstDayCurrentMonth) &&
                                    "text-gray-900",
                                    !isEqual(day, selectedDay) &&
                                    !isToday(day) &&
                                    !isSameMonth(day, firstDayCurrentMonth) &&
                                    "text-gray-400",
                                    isEqual(day, selectedDay) && isToday(day) && "bg-[#378760]",
                                    isEqual(day, selectedDay) &&
                                    !isToday(day) &&
                                    "bg-[#378760]",
                                    !isEqual(day, selectedDay) && "hover:bg-gray-200",
                                    (isEqual(day, selectedDay) || isToday(day)) &&
                                    "font-semibold",
                                    "mx-auto flex px-4 py-1 items-center justify-center rounded-full"
                                )}
                            >
                                <time dateTime={format(day, "yyyy-MM-dd")}>
                                    {format(day, "dd")}
                                </time>
                            </button>

                            <div className="w-1 h-1 mx-auto mt-1">
                                {meetings.some((meeting) =>
                                    isSameDay(parseISO(meeting.startDatetime), day)
                                ) && (
                                        <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
