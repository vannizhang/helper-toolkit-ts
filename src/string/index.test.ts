import { capitalizeFirstLetter, trunc } from '../index';

test('string functions', () => {
  expect(capitalizeFirstLetter('hello world')).toBe('Hello World');

  expect(trunc('its very long', 11, true)).toBe('its very...');
});
