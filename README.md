# Firefox OS IDE helper

Some JavaScript interfaces implementation for Firefox OS WebAPIs, helpful for
code completion and type hinting.

## About

All of us know Firefox OS is a relatively new and revolutionary mobile operating
system, that's why making use of the WebAPIs the OS uses can be a problem if we
want our IDE to do the job we should. Most editors and/or IDEs are missing of
that interfaces.

This repository contains some of the relevant (I mean, most used) definitions in
JavaScript code (a TypeScript version is planned), so you get code completion,
parameter info, argument and return type hinting, wrong type assignment check,
and other goodies the IDE of your choice supports.

## Contents

Currently, the repository has the following contents:

* Base types: `DOMRequest` and `DOMCursor`.

## Usage

Clone/download this repository or just the `fxos-ide-helper.js` file, then tell
your editor/IDE to treat that file (or the entire repository) as a library.

## Notes

* The interfaces are fetched from Mozilla Developer Network (MDN) JavaScript
  documentation, specifically from [this](http://goo.gl/C6y2XC) link.
* This repository doesn't contain *enum* definitions. JSDoc still don't supports
  documentation for allowed values (WebStorm's implementation does, but not all
  the world uses this IDE).
* The definitions were well tested and working in WebStorm 9, 10 and PhpStorm 8.
  If something didn't worked for your editor/IDE, feel free to open a issue and
  I'll try to add support for that.
* Support for [Adobe Brackets](http://brackets.io) was, for the moment, left in
  *nothing*. Is there any plugin that reads JSDoc and helps with code completion
  for that IDE?

## License

MIT.
