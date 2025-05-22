# Flex Grow e Flex Shrink

![Mapa Mental Flex Grow](aula08-1.png)
![Mapa Mental Flex Shrink](aula08-2.png)

```html
  <div class="container">
    <div class="item" style="--hue: 0;">1</div>
    <div class="item" style="--hue: 100;">2</div>
    <div class="item" style="--hue: 200;">3</div>
    <div class="item" style="--hue: 300;">4</div>

    <div class="item" style="--hue: 0;">5</div>
    <div class="item" style="--hue: 100;">6</div>
    <div class="item" style="--hue: 200;">7</div>
    <div class="item" style="--hue: 300;">8</div>
  </div>
```

```css
  .container {
    border: dashed;
    display: flex;
  }

  .item {
    --hue: 0;
    text-align: center;
    background-color: hsl(var(--hue), 100%, 70%);
    flex-basis: 120px; /* Para ver o flex-shrink */
    flex-grow: 1;
    flex-shrink: 0;
    flex-shrink: 1; /* Padrão */
  }

  .item:nth-child(6) {
    /* flex-grow: 2; */
    flex-grow: 3;
    flex-shrink: 1;
  }
```
