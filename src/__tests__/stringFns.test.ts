import { stringFns } from '../index';

test('string functions', () => {
  expect(stringFns.capitalizeFirstLetter('hello world')).toBe('Hello World');

  expect(stringFns.hasHtmlTag('<p>foobar</p>')).toBe(true);

  expect(stringFns.stripHtmlTag('<p>foobar</p>')).toBe('foobar');
});
