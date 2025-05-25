# Grid Row

```html
<div id="app">
  <header>1</header>
  <main>2</main>
  <aside>3</aside>
  <footer>4</footer>
</div>
```

```css
body {
  margin: 0;
}

#app {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100vh;

  border: 1px solid green;
}

#app > * {
  border: 1px solid red;
}

#app header {
  grid-row-start: 1;
  grid-row-end: 4;
}

#app main {
  grid-column: 2/4;
  grid-row: 1/3;
}
```
