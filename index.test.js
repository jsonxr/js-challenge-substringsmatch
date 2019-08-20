const { firstCharsMatch, maxPrefix, maxPrefixRecurse, comparePrefixBetweenTwoWords } = require('./index.js');
const assert = require('chai').assert;

describe('firstCharsMatch(s1, s2, count)', () => {
  it('should return true if at least the first character matches', () => {
    assert.equal(firstCharsMatch('aa', 'ab', 1), true);
  });
  it('should return false if no characters match', () => {
    assert.equal(firstCharsMatch('aa', 'b', 1), false);
  });
  it('should return false if no characters match', () => {
    assert.equal(firstCharsMatch('aa', 'ab', 2), false);
  });
  it('should return true if first two chars match', () => {
    assert.equal(firstCharsMatch('aa', 'aab', 2), true);
  });
  it('should return false if one string is too short', () => {
    assert.equal(firstCharsMatch('a', 'aa', 2), false);
  });
});

describe('comparePrefixBetweenTwoWords(word1, word2)', () => {
  it('should return "a" if given "a" and "aa"', () => {
    assert.equal(comparePrefixBetweenTwoWords('a', 'aa'), 'a');
  });
  it('should return "" if given "a" and "b"', () => {
    assert.equal(comparePrefixBetweenTwoWords('a', 'b'), '');
  });
  it('should return "" if given "" and "a"', () => {
    assert.equal(comparePrefixBetweenTwoWords('', 'a'), '');
  });
  it('should return "aaa" if given "aaa" and "aaa"', () => {
    assert.equal(comparePrefixBetweenTwoWords('aaa', 'aaa'), 'aaa');
  });
});

describe('maxPrefix', () => {
  it('should return same string if array of one', () => {
    assert.equal(maxPrefix(['aaaaaaaaa']), 'aaaaaaaaa');
  });
  it('should return same string if array of one', () => {
    assert.equal(maxPrefix(['a']), 'a');
  });
  it('should return empty string if there is one empty string in array', () => {
    assert.equal(maxPrefix(['', 'a', 'a', 'aa']), '');
  });
  it('should return same string if two strings equal', () => {
    assert.equal(maxPrefix(['aa', 'aa']), 'aa');
  });
  it('should return longest substr', () => {
    assert.equal(maxPrefix(['aaaaaaaaa', 'aaaaaaaab']), 'aaaaaaaa');
  });
  it('should return a if given ab, abc, a', () => {
    assert.equal(maxPrefix(['ab', 'abc', 'a']), 'a');
  });
  it('should return empty string if given no matches', () => {
    assert.equal(maxPrefix(['ab', 'abc', 'b']), '');
  });
  it('should return ab if given at least ab as match', () => {
    assert.equal(maxPrefix(['ab', 'abc', 'abcd']), 'ab');
  });
  it('should return empty string if given array of length 0', () => {
    assert.equal(maxPrefix([]), '');
  });
});

describe('maxPrefixRecurse(strings)', () => {
  it('should return same string if array of one', () => {
    assert.equal(maxPrefixRecurse(['aaaaaaaaa']), 'aaaaaaaaa');
  });
  it('should return same string if array of one', () => {
    assert.equal(maxPrefixRecurse(['a']), 'a');
  });
  it('should return empty string if there is one empty string in array', () => {
    assert.equal(maxPrefixRecurse(['', 'a', 'a', 'aa']), '');
  });
  it('should return same string if two strings equal', () => {
    assert.equal(maxPrefixRecurse(['aa', 'aa']), 'aa');
  });
  it('should return longest substr', () => {
    assert.equal(maxPrefixRecurse(['aaaaaaaaa', 'aaaaaaaab']), 'aaaaaaaa');
  });
  it('should return a if given ab, abc, a', () => {
    assert.equal(maxPrefixRecurse(['ab', 'abc', 'a']), 'a');
  });
  it('should return empty string if given no matches', () => {
    assert.equal(maxPrefixRecurse(['ab', 'abc', 'b']), '');
  });
  it('should return ab if given at least ab as match', () => {
    assert.equal(maxPrefixRecurse(['ab', 'abc', 'abcd']), 'ab');
  });
  it('should return empty string if given array of length 0', () => {
    assert.equal(maxPrefixRecurse([]), '');
  });
});
