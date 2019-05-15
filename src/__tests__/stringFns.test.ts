import { stringFns } from '../index';

test('string functions', () => {
    expect(stringFns.capitalizeFirstLetter('hello world')).toBe('Hello World');
});