[![Build Status](https://travis-ci.org/doughtnerd/pug-stringifier.svg?branch=master)](https://travis-ci.org/doughtnerd/pug-stringifier)
[![Coverage Status](https://coveralls.io/repos/github/doughtnerd/pug-stringifier/badge.svg?branch=master)](https://coveralls.io/github/doughtnerd/pug-stringifier?branch=master)


Pug Stringifier
=========

A small library that converts a Pug template into an HTML string using ES6 promises.

## Installation

  `npm install @doughtnerd/pug-stringifier`

## Usage

    var stringifier = require('@doughtnerd/pug-stringifier');
    
    stringifier.stringify('absolute/path/to/template', {exampleContext: ['a', 'b', 'c']}).then((html) =>{
        // Do whatever with the html string that was compiled from the template.
    }).catch((err) => {
        // Do whatever with the error.
    });
  
## Tests

  `npm test` or
  `npm run cover`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. 
Add unit tests for any new or changed functionality. Lint and test your code.
