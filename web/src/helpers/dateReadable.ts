import { Type } from "../interfaces/todo";
import { getStartOfDay, getStartOfMonth, getStartOfWeek } from "./date";

// Very naive implementation. Should change to use date-fns or make a more robust solution
const dateForType = (type: Type, unix: number): number => {
    if (type === Type.daily) {
        return getStartOfDay(unix);
    }

    if (type === Type.weekly) {
        return getStartOfWeek(unix);
    }

    return getStartOfMonth(unix);
}

const getDateInYear = (unix: number): string => {
    const date = new Date(unix);

    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

const getMonthInYear = (unix:number): string => {
    const date = new Date(unix);

    return `${date.getFullYear()}-${date.getMonth() + 1}`;
} 


export { getDateInYear, dateForType, getMonthInYear };
