import { abbreviateNumber, numberWithCommas } from './index';

test('abbreviateNumber ', () => {
  expect(abbreviateNumber(1500)).toBe('1.5K');
  expect(abbreviateNumber(1000000)).toBe('1M');
  expect(abbreviateNumber(100000000)).toBe('100M');
});

test('numberWithCommas', () => {
  expect(numberWithCommas(15000)).toBe('15,000');
});
