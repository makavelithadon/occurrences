## A library that tracks the occurrences of a word in a sentence

# Getting Started

### Use it in your app

with Unpkg :

````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <script src="https://unpkg.com/mano-mano-occurrences@1.0.0/dist/main.min.js"></script>
</body>
</html>
````

with NPM :

````
npm i --save-dev mano-mano-occurrences
````

````javascript
import Occurrences from 'mano-mano-occurrences';

// or

const Occurrences = require('mano-mano-occurrences');

const occ = new Occurrences('Lorem ipsum', { /*  options  */ });

occ.getOccurrenceFrom('ipsum'); // 1

````

# Options

#### minLength

Set the minimal length of a word, if the word's length is lower then this, it will be ignore.

Default : 2

# Contributing

clone this repository then execute this command

````
npm install
````

or

````
yarn
````

# Development

````
npm run start
````

Then edit files

# Build

````
npm run build
````

This will clean up the dist folder and its contain and bundle the files

# Tests

````
npm run test
````
