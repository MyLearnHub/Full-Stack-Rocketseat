# Especificidade
  - Cada seletor tem um peso
  - Soma dos pesos faz a declaração ser aplicada

  #id - 100
  .class - 10
  element - 1

```html
  <p id="text" class="green">Lorem ipsum dolor sit amet</p>
```

```css
  p#text.green {
    color: black;
  }

  #text {
    color: blue;
  }

  .green {
    color: green;
  }
  
  p {
    color: red;
  }
```
