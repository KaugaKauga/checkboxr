import { expect, it } from 'vitest'
import { Type } from "../interfaces/todo";
import { filterDateForType, isDateThisMonth, isDateThisWeek, isDateToday } from "./date";

it('test filterDateForType', () => {
    const unixYesterday = Date.now() - 1000 * 60 * 60 * 24;
    const unixLastWeek = Date.now() - 1000 * 60 * 60 * 24 * 8;
    const unixLastMonth = Date.now() - 1000 * 60 * 60 * 24 * 40;

    expect(filterDateForType(Type.daily, Date.now())).toBeTruthy();
    expect(filterDateForType(Type.daily, unixYesterday)).toBeFalsy();

    expect(filterDateForType(Type.daily, Date.now())).toBeTruthy();
    expect(filterDateForType(Type.daily, unixLastWeek)).toBeFalsy();

    expect(filterDateForType(Type.monthly, Date.now())).toBeTruthy();
    expect(filterDateForType(Type.monthly, unixLastMonth)).toBeFalsy();
})

it('test isDateToday', () => {
    const unixYesterday = Date.now() - 1000 * 60 * 60 * 24;
    expect(isDateToday(Date.now())).toBeTruthy();
    expect(isDateToday(unixYesterday)).toBeFalsy();
})

it('test isDateThisWeek', () => {
    const unixLastWeek = Date.now() - 1000 * 60 * 60 * 24 * 8;

    expect(isDateThisWeek(Date.now())).toBeTruthy();
    expect(isDateThisWeek(unixLastWeek)).toBeFalsy();
})

it('test isDateThisMonth', () => {
    const unixLastMonth = Date.now() - 1000 * 60 * 60 * 24 * 40;

    expect(isDateThisMonth(Date.now())).toBeTruthy();
    expect(isDateThisMonth(unixLastMonth)).toBeFalsy();
})