import { numberFns } from '../index';

test('number functions >>> abbreviateNumber', () => {
    expect(numberFns.abbreviateNumber(1500)).toBe('1.5K');
    expect(numberFns.abbreviateNumber(1000000)).toBe('1M');
    expect(numberFns.abbreviateNumber(100000000)).toBe('100M');
});

test('number functions >>> numberWithCommas', () => {
    expect(numberFns.numberWithCommas(15000)).toBe('15,000');
});