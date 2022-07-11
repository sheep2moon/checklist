export const checkIsToday = seconds => {
    let time = new Date(1970, 0, 1);
    time.setSeconds(seconds);
    const today = new Date();
    console.log(time, today);
    if (time.getDate() === today.getDate() && time.getMonth() === today.getMonth() && time.getFullYear() === today.getFullYear()) return true;
    return false;
};
