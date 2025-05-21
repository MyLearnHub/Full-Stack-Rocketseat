# Justify-Content

![Mapa Mental Alinhamentos e Espaçamentos](aula03-1.png)
![Mapa Mental Justify-Content](aula03-2.png)

```html
  <div class="container">
    <div class="item" style="--hue: 0">1</div>
    <div class="item" style="--hue: 100">2</div>
    <div class="item" style="--hue: 200">3</div>
    <div class="item" style="--hue: 300">4</div>
  </div>
```

```css
  .container {
    border: dashed;
    height: 50vh;
    display: flex;
    /* flex-direction: row-reverse; */
    flex-direction: column;
    /* justify-content: flex-start; */
    /* justify-content: flex-end; */
    /* justify-content: center; */
    /* justify-content: space-evenly; */
    /* justify-content: space-around; */
    justify-content: space-between;
  }

  .item {
    --hue: 0;
    text-align: center;
    background-color: hsl(var(--hue), 100%, 70%);
  }
```
