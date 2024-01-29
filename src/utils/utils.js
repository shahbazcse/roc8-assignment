export const formatDate = (current) => {
    const date = new Date(current);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const getNextDate = (today) => {
    const currentDay = new Date(today);
    const nextDay = new Date(today);
    nextDay.setDate(currentDay.getDate() + 1);
    return nextDay;
};

export const getCurrentDate = (currentDate) => {
    const options = {
        weekday: "long",
        month: "short",
        day: "numeric",
    };

    const date = currentDate
        ? currentDate?.toLocaleDateString("en-US", options)
        : "";
    return date;
};

export const extractTimeAMPM = (dateString) => {
    const dateObject = new Date(dateString);

    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();

    const period = hours >= 12 ? "PM" : "AM";

    const hours12 = hours % 12 || 12;

    const formattedTime = `${String(hours12).length === 1 ? "0" : ""
        }${hours12}:${minutes.toString().padStart(2, "0")} ${period}`;

    return formattedTime;
};
