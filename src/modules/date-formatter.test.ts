import { formatDateAsInputValue } from './date-formatter';

test('format date as input value', () => {
    const value: string = formatDateAsInputValue(new Date(2022, 8, 10));

    expect(value).toBe('2022-09-10');
});