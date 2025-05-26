# Alinhamentos Self

```html
  <div class="grid">
    <div>a</div>
    <div>b</div>
    <div>c</div>
    <div>d</div>
    <div>e</div>
    <div>f</div>
    <div>g</div>
    <div>h</div>
    <div>i</div>
  </div>
```

```css
  * {
    margin: 0;
    box-sizing: border-box;
  }

  .grid {
    display: grid;

    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 8px;

    height: 100vh;
    width: 100vw;
    background-color: black;
  }

  .grid > div {
    background-color: cornflowerblue;
  }

  .grid div:nth-child(2) {
    /* Trabalha no eixo Y (vertical) */
    align-self: start;
    align-self: center; 
    align-self: end; 

    /* Trabalha no eixo X (horizontal) */
    justify-self: start; 
    justify-self: center; 
    justify-self: end; 

    /* Junção do Align e Justify */
    place-self: start; 
    place-self: end; 
    place-self: center; 
  }
```
