# Alinhamentos Content

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
    align-content: start;
    align-content: end; 
    align-content: center; 
    align-content: space-around; 
    align-content: space-between; 

    /* Trabalha no eixo X (horizontal) */
    justify-content: center; 
    justify-content: end; 
    justify-content: space-around; 
    justify-content: space-between; 
    justify-content: space-evenly; 

    /* Junção do Align e Justify */
    place-content: center; 
    place-content: end; 
    place-content: space-evenly; 
    place-content: space-between; 
    place-content: space-around; 

    height: 100vh;
    width: 100vw;
    background-color: black;
  }

  .grid > div {
    background-color: cornflowerblue;
  }
```