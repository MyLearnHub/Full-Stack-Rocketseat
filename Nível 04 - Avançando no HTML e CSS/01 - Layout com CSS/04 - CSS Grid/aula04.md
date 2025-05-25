# Grid Template Rows

```html
<div id="app">
  <div>1</div>
  <span>2</span>
  <span>3</span>
  <div>4</div>
</div>
```

```css
body {
  margin: 0;
}

#app {
  display: grid;
  /* grid-template-rows: 200px 1fr 2fr 1fr; */
  /* grid-template-rows: 200px 1fr 2fr 50%; */
  /* grid-template-columns: repeat(4, 1fr); */
  /* grid-template-columns: repeat(2, 1fr); */
  /* grid-template-columns: 150px 1fr; */
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: 200px 50%; */
  /* grid-template-rows: 200px 1fr; */
  /* grid-template-rows: 200px 1fr; */
  grid-template-rows: repeat(3, 1fr);

  height: 100vh;
  border: 1px solid green;
}

#app > div {
  border: 1px solid red;
}

span {
  border: 1px solid blue;
}
```
