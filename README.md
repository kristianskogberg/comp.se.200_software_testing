# Software testing course assignment (part 2)

Group members:

`Kristian Skogberg, 292050`

`Yi Lo, 151889060`

This repository contains automated testing workflow consisting of Github Actions (CI pipeline) and Coveralls for test coverage reporting.

## Code coverage status

The coverage reports are generated using the `c8` library and `coveralls`. Please see the badge below for the current code coverage status from Coveralls (clicking it will open the Coveralls report).

[![Coverage Status](https://coveralls.io/repos/github/kristianskogberg/comp.se.200_software_testing/badge.svg?branch=main)](https://coveralls.io/github/kristianskogberg/comp.se.200_software_testing?branch=main)

## Tools

`Mocha` and `Chai` are used for writing the unit tests for the provided utility library. `c8` is used for generating coverage reports using Node.js.

## Files selected for testing

Our test plan is to test the following files of the utility library:

`add.js`

`divide.js`

`eq.js`

`filter.js`

`get.js`

`IsArrayLike.js`

`isArrayLikeObject.js`

`isBoolean.js`

`toNumber.js`

`toString.js`

## How to test

To run the unit tests and get code coverage, run the following commands in the root directory:

1. `npm install` to install all dependencies
2. `npm test` to perform the unit tests
3. `npm run coverage` to calculate the code coverage
