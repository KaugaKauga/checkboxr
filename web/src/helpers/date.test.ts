import { Type } from "../interfaces/todo";
import { filterDateForType, getStartOfDay, getStartOfMonth, getStartOfWeek, isDateThisMonth, isDateThisWeek, isDateToday } from "./date";

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

it('test getStartOfDay', () => {
    const startOfDay = 1674687600000 // 26 Jan 2023 00:00;
    const sameDayAsStartOfDay = 1674739957638; // 26 Jan 2023 14:32
    const oneDayBeforeStartOfDay = 1674687600000 - 1000 * 60 * 60 * 24;

    expect(startOfDay).toEqual(getStartOfDay(sameDayAsStartOfDay));
    expect(startOfDay === getStartOfDay(oneDayBeforeStartOfDay)).toBeFalsy();
});

it('test getStartOfWeek', () => {
    const startOfWeek = 1674342000000 // 22 Jan 2023 00:00
    const sameWeekAsStartOfWeek = 1674342000000 // 26 Jan 2023 00:00
    const oneDayBeforeStartOfWeek = 1674255600000 // 21 Jan 2023 00:00

    expect(startOfWeek).toEqual(getStartOfWeek(sameWeekAsStartOfWeek));
    expect(startOfWeek === getStartOfWeek(oneDayBeforeStartOfWeek)).toBeFalsy();
})

it('test getStartOfMonth', () => {
    const startOfMonth = 1672527600000; // 01 Jan 2023 00:00
    const sameMonthAsStartOfMonth = 1673654400000 // 14 Jan 2023 00:00
    const nextMonthForStartOfMonth = 1676332800000 // 14 Feb 2023 00:00
    const oneMonthBeforeStartOfMonth = 1670976000000 // 14 Dec 2022 00:00

    expect(startOfMonth).toEqual(getStartOfMonth(sameMonthAsStartOfMonth));
    expect(startOfMonth === getStartOfMonth(nextMonthForStartOfMonth)).toBeFalsy();
    expect(startOfMonth === getStartOfMonth(oneMonthBeforeStartOfMonth)).toBeFalsy();
});