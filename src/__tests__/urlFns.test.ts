import { urlFns } from '../index';

test('string functions', () => {
  expect(urlFns.updateKeyValuePairInQueryString({
    queryString: 'f=json&start=1&num=10&q=(hurricane)&categories=/Categories',
    key: 'start',
    value: 11
  })).toBe('f=json&start=11&num=10&q=(hurricane)&categories=/Categories');
});