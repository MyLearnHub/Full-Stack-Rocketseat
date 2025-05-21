# Container, Itens e Eixo

![Mapa Mental de Conceitos](aula02-1.png)
![Demonstração de Eixo (Axis)](aula02-2.png)
![Mapa Mental de Direção](aula02-3.png)

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
    display: flex;
    flex-direction: column;
    /* flex-direction: row-reverse; */
    /* flex-direction: column-reverse; */
  }

  .item {
    --hue: 0;
    text-align: center;
    background-color: hsl(var(--hue), 100%, 70%);
  }
```
