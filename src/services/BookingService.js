import { formatDate, getNextDate } from "../utils/utils";

export const getAllSlots = async (currentDate) => {
    const start_date = formatDate(currentDate);
    const end_date = formatDate(getNextDate(start_date));
    try {
        const response = await fetch(`https://app.appointo.me/scripttag/mock_timeslots?start_date=${start_date}&end_date=${end_date}`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log("Error:", e.message);
    }
}

export const makeBooking = (bookingDetails) => {
    console.log(bookingDetails);
}