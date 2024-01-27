export const formatDate = (current) => {
    return `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`
}

export const getNextDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow;
}