const assert = require('chai').assert;

const maxPrefix = strings => {
  // Just return empty string if it's falsy or empty array
  if (!strings || strings.length === 0) {
    return '';
  }

  // Define the upper possible match
  const maxLen = strings.reduce((a, c) => {
    return a > c.length ? a : c.length;
  }, 0);

  // Start with first character to see if we have a match
  let count = 0;
  for (let i = 1; i < maxLen + 1; i++) {
    const prefix = strings[0].substr(0, i); // Do all strings match this?
    const matches = strings.reduce((accumulator, current) => {
      return (
        accumulator && // Starts out as true
        // This matches if the first i characters match prefix
        current.substr(0, i) === prefix &&
        // Don't count this as a match if length of word is longer than current char
        current.length >= i
      );
    }, true);

    // Break on the first non-match
    if (!matches) {
      break;
    }
    count = i;
  }

  return strings[0].substr(0, count);
};

const firstCharsMatch = (s1, s2, count) => {
  const pre1 = s1.substr(0, count);
  const pre2 = s2.substr(0, count);
  return pre1 === pre2;
};

module.exports = {
  firstCharsMatch,
  maxPrefix,
};
