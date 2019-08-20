const assert = require('chai').assert;

const firstCharsMatch = (s1, s2, count) => {
  const pre1 = s1.substr(0, count);
  const pre2 = s2.substr(0, count);
  return pre1 === pre2;
};

const comparePrefixBetweenTwoWords = (word1, word2) => {
  const minLen = Math.min(word1.length, word2.length);

  let count = 0;
  for (let i = count + 1; i < minLen + 1; i++) {
    if (firstCharsMatch(word1, word2, i)) {
      count = i;
    } else {
      break;
    }
  }

  return word1.substr(0, count);
};

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

const maxPrefixRecurse = strings => {
  // Empty string, undefined, null, or empty array, return empty string
  if (!strings || strings.length === 0) {
    return '';
  }

  // Only element? return whole string
  if (strings.length === 1) {
    return strings[0];
  }

  // We can compare these two strings and return the common prefix
  if (strings.length === 2) {
    return comparePrefixBetweenTwoWords(strings[0], strings[1]);
  }

  // No termination point, need to split up these strings to simpler strings
  // find the mid point
  const mid = strings.length / 2;
  const leftStrings = strings.slice(0, mid);
  const rightStrings = strings.slice(mid);

  // find the most common prefix in left list
  const prefix1 = maxPrefixRecurse(leftStrings);

  // Find the most common prefix in the right list
  const prefix2 = maxPrefixRecurse(rightStrings);

  // Now find the most common prefix between the two
  return maxPrefixRecurse([prefix1, prefix2]);
};

module.exports = {
  firstCharsMatch,
  maxPrefix,
  maxPrefixRecurse,
  comparePrefixBetweenTwoWords,
};
