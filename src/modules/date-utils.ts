export function getFutureDate(daysInFuture: number): Date {
    const date: Date = new Date();
    const futureDate: number = date.getDate() + daysInFuture;
    date.setDate(futureDate);
    return date;
}