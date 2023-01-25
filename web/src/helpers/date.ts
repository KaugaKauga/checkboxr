import { Type } from "../interfaces/todo";

const filterDateForType = (type: Type, unix: number) => {
    if (type === Type.daily) {
        return isDateToday(unix);
    }

    if (type === Type.weekly) {
        return isDateThisWeek(unix);
    }

    return isDateThisMonth(unix);
}

const getWeek = (unix: number) => {
    const temp = new Date();
    const firstDayOfYear = new Date(temp.getFullYear(), 0, 1).getTime();
    const dayOfYear = ((unix - firstDayOfYear + 86400000) / 86400000);
    return Math.ceil(dayOfYear / 7)
}

const isDateToday = (unix: number): boolean => {
    const a = new Date(unix);
    const b = new Date();

    return a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate();
}

const isDateThisWeek = (unix: number) => {
    const now = new Date();
    const inputDate = new Date(unix);

    return now.getFullYear() === inputDate.getFullYear() &&
        getWeek(now.getTime()) === getWeek(inputDate.getTime());
}

const isDateThisMonth = (unix: number): boolean => {
    const a = new Date(unix);
    const b = new Date();

    return a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth();
}

export { filterDateForType, isDateToday, isDateThisWeek, isDateThisMonth };
