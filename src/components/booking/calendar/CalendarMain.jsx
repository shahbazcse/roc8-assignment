import React, { useContext, useState } from "react";
import { AppContext } from "../../../contexts/AppContext";
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
        const response = await getAllSlots(formatDate(day));
        dispatch({ type: "UPDATE_TIMESLOTS", payload: response });
    }

    return (
        <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
            <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
                <div className="md:pr-14">
                    <div className="flex items-center">
                        <h2 className="flex-auto font-semibold text-gray-900">
                            {format(firstDayCurrentMonth, "MMMM yyyy")}
                        </h2>
                        <button
                            type="button"
                            onClick={previousMonth}
                            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Previous month</span>
                            <MdArrowBackIos className="w-5 h-5" aria-hidden="true" />
                        </button>
                        <button
                            onClick={nextMonth}
                            type="button"
                            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Next month</span>
                            <MdArrowForwardIos className="w-5 h-5" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
                        <div>S</div>
                        <div>M</div>
                        <div>T</div>
                        <div>W</div>
                        <div>T</div>
                        <div>F</div>
                        <div>S</div>
                    </div>
                    <div className="grid grid-cols-7 mt-2 text-sm">
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
                                        isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
                                        isEqual(day, selectedDay) &&
                                        !isToday(day) &&
                                        "bg-gray-900",
                                        !isEqual(day, selectedDay) && "hover:bg-gray-200",
                                        (isEqual(day, selectedDay) || isToday(day)) &&
                                        "font-semibold",
                                        "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                                    )}
                                >
                                    <time dateTime={format(day, "yyyy-MM-dd")}>
                                        {format(day, "d")}
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
        </div>
    );
};
