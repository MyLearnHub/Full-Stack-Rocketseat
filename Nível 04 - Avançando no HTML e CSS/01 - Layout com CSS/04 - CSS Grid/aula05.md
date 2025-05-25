# Grid Column

## Itens (filhos)
  - grid-column;
    - grid-column-start;
    - grid-column-end;
  - grid-row;
    - grid-row-start;
    - grid-row-end;
  - grid-area;

```html
<div id="app">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
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

#app > div {
  border: 1px solid red;
}

#app div:nth-child(1) {
  grid-column-start: 1;
  /* grid-column-end: 2; */
  /* grid-column-end: 3; */
  grid-column-end: 4;
}

#app div:nth-child(2) {
  grid-column: 1/3;
}

#app div:nth-child(4) {
  grid-column: 1/4;
}
```

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
  grid-column-start: 1;
  grid-column-end: 4;
}

#app main {
  grid-column: 1/3;
}

#app footer {
  grid-column: 1/4;
}
```
