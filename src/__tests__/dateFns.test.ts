import { dateFns } from '../index';

test('date functions >>> generateUID', () => {
    expect(dateFns.formatTimestamp(1568742213)).toBe('2019/09/17');
});
