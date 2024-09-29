import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with addition class', () => {
    expect(classNames('foo', {}, ['bar'])).toBe('foo bar');
  });

  test('with mod classes', () => {
    expect(classNames('foo', { hovered: true, bad: true }, ['haha'])).toBe('foo haha hovered bad');
  });

  test('with mod class false', () => {
    expect(classNames('foo', { hovered: true, good: false }, [])).toBe('foo hovered');
  });

  test('with mod class undefined', () => {
    expect(classNames('foo', { hovered: true, good: undefined }, [])).toBe('foo hovered');
  });

  test('with mod class null', () => {
    expect(classNames('foo', { hovered: true, good: null }, [])).toBe('foo hovered');
  });
});
