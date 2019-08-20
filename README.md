# Description

Two implementations on how to find the most common prefix when given a list of strings.  Test of recursion function was implemented by copy/paste of the more straigh forward function. Should perform some timings to proove my assertion that it is indeed faster.

# Install

    yarn install
    yarn test

# Using a for Loop

    maxPrefix(strings)

Implementation using for loop, easier to read.

    aaaa  aaaa   aaab  aabb

    // Test a, Three comparisons
    // Test aa Three comparisons
    // Test aaa Three comparisons

# Using recursion (faster)

    maxPrefixRecurse(strings)

Implementation using recursion. Speeds up the search because it finds the common prefix recursively by only comparing each element.

    aaaa  aaaa   aaab  aabb
       \  /        \   /
       aaaa          aa   // two comparisons
            \   /
              aa          // one comparison

    // Only does three comparisons


