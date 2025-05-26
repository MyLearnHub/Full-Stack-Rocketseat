# Gap

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
  "A B B" 
  "A B B" 
  "A C D";

  gap: 20px;
  row-gap: 30px;
  column-gap: 30px;

  height: 100vh;

  padding: 30px;

  box-sizing: border-box;
}

#app header {
  grid-area: A;
}

#app main {
  grid-area: B;
}
```
