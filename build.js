const svelte = require('svelte');
const fs = require('fs')

const source = fs.readFileSync('App.html', 'utf8')

const compiled = svelte.compile(source, {
  format: 'iife',
  filename: 'App.html',
  name: 'Crossword',
  cascade: false,
});

fs.writeFileSync('crossword.js', compiled.code)