[![Build Status](https://travis-ci.org/duxiaofeng-github/moment-is-zero.svg?branch=master)](https://travis-ci.org/duxiaofeng-github/moment-is-zero)

A plugin to recognize `0001-01-01T00:00:00Z` or `unix timestamp 0` for `moment`.

Recognizing `0001-01-01T00:00:00Z` may convenient for some language like golang.

# Install

`npm install moment-is-zero --save`

or

`yarn add moment-is-zero`

# Usage

`moment('0001-01-01T00:00:00Z').isZero()`

or

`moment.unix(0).isZero()`

return value true or false.

*notice:*

`moment('0001-01-01T00:00:00Z+08:00').isZero()` is false. You need remove time zone yourself.

# License

MIT
