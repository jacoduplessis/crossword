const svelte = require('svelte');
const fs = require('fs')

const source = fs.readFileSync('App.html', 'utf8')

const compiled = svelte.compile(source, {
  // the target module format – defaults to 'es' (ES2015 modules), can
  // also be 'amd', 'cjs', 'umd', 'iife' or 'eval'
  format: 'iife',

  // the filename of the source file, used in e.g. generating sourcemaps
  filename: 'App.html',

  // the name of the constructor. Required for 'iife' and 'umd' output,
  // but otherwise mostly useful for debugging. Defaults to 'SvelteComponent'
  name: 'Crossword',

  cascade: false,
});

fs.writeFileSync('crossword.js', compiled.code)
