import { formatDate, getNextDate } from "../utils/utils";

export const getAllSlots = async (currentDate) => {
    const start_date = formatDate(currentDate);
    const end_date = formatDate(getNextDate(currentDate));
    try {
        const response = await fetch(
            `https://app.appointo.me/scripttag/mock_timeslots?start_date=${start_date}&end_date=${end_date}`
        );
        const data = await response.json();
        return { status: 200, data };
    } catch (e) {
        console.log("Error:", e.message);
        return {
            status: 500,
            message: "Cannot Fetch Slots. Try Again Later.",
        };
    }
};

export const makeBooking = (bookingDetails) => {

};
