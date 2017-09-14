A plugin to recognize `0001-01-01T00:00:00Z` or `unix timestamp 0` for `moment`.

# Install

`npm install moment-is-zero --save`

or

`yarn add moment-is-zero`

# Usage

`moment('0001-01-01T00:00:00Z').isZero()`

return value true or false.

*notice:*

`moment('0001-01-01T00:00:00Z+08:00').isZero()` is false. You need remove time zone yourself.

# License

MIT
