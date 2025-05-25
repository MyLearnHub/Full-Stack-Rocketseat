# Grid Template Columns

- grid-template;
  - grid-template-columns;
  - grid-template-rows;
  - grid-template-areas;

```html
<div id="app">
  <div>1</div>
  <span>2</span>
  <span>3</span>
  <div>4</div>
</div>
```

```css
#app {
  display: grid;
  /* grid-template-columns: 100px 200px 300px; */
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(6, 1fr); /* Aguarda algum elemento, ou deixa o espaço vazio */
  /* grid-template-columns: 1fr 2fr 1fr; */
  /* grid-template-columns: 1fr 3fr 1fr; */
  /* grid-template-columns: 1fr 3fr 2fr; */
  /* grid-template-columns: 1fr 200px 50% 30vw; */
  /* grid-template-columns: 1fr 200px 50% 30rem; */
}

#app > div {
  border: 1px solid red;
}

span {
  border: 1px solid blue;
}
```
