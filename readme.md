# Crossword

App to create, complete and share crossword puzzles. Built with Svelte.

Requires a modern browser.

## Usage

```html
<script src="crossword.js"></script>
<div id="app"></div>
  <script>
    const app = new Crossword({
      target: document.querySelector('#app')
      // optional, default 13 x 13
      data: {
        rows: 10, 
        columns: 10,
      }
    })
  </script>
```

## Demo

[https://jacoduplessis.github.io/crossword/](https://jacoduplessis.github.io/crossword/?r=13&c=13&v=kosblik.g.s.t.m.i.s.kenterplatkop.d.u.o.o.s.l.rondtehooiwa..e.e.t.p.g.segmentek.r..i.e..t.llaastens.s.t.i.n.o..eskortnugter.l.r.o.k.e.r.eskaderelegie.i.p.w.r.r.s.versier)

## Todo

- Service worker for offline usage
- Clues

## License

If you want to use embed this app on your own site, 
please contact me via [email](mailto:jaco@jacoduplessis.co.za). 
Commercial usage will require a paid license.

 