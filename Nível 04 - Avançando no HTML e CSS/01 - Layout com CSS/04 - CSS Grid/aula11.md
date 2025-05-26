# Alinhamentos Items

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

    /* Trabalha no eixo Y (vertical) */
    align-items: stretch;
    align-items: start;
    align-items: center; 
    align-items: end; 

    /* Trabalha no eixo X (horizontal) */
    justify-items: start; 
    justify-items: center; 
    justify-items: end; 

    /* Junção do Align e Justify */
    place-items: start; 
    place-items: end; 
    place-items: center; 

    height: 100vh;
    width: 100vw;
    background-color: black;
  }

  .grid > div {
    background-color: cornflowerblue;
  }
```