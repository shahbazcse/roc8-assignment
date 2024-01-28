export const formatDate = (current) => {
    return `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`
}

export const getNextDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow;
}

export const extractTimeAMPM = (dateString) => {
    const dateObject = new Date(dateString);

    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();

    const period = hours >= 12 ? 'PM' : 'AM';

    const hours12 = hours % 12 || 12;

    const formattedTime = `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;

    return formattedTime;
}