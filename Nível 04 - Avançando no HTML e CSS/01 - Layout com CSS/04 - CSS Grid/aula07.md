# Grid Template Areas

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
  grid-template-areas: 
  "A B B" 
  "A B B" 
  "A C D";

  height: 100vh;
}

#app > * {
  border: 1px solid red;
}

#app header {
  grid-area: A;
}

#app main {
  grid-area: B;
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

#app > * {
  border: 1px solid red;
}

#app {
  display: grid;
  
  grid-template-areas: 
  "header header header" 
  "main main aside" 
  "footer footer footer";

  height: 100vh;
}

#app header {
  grid-area: header;
}

#app main {
  grid-area: main;
}

#app footer {
  grid-area: footer;
}
```
