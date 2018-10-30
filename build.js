const svelte = require('svelte');
const fs = require('fs')

const source = fs.readFileSync('App.html', 'utf8')

const dev = process.env.NODE_ENV === 'dev'

const compiled = svelte.compile(source, {
  format: 'iife',
  filename: 'App.html',
  name: 'Crossword',
  dev: dev,
  css: false,
});


fs.writeFileSync('crossword.js', compiled.js.code)
fs.writeFileSync('crossword.css',compiled.css.code)
