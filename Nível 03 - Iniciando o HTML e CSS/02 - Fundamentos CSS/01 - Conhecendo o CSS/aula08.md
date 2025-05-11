# Seletores
  - type | element | tag
  - id
  - class
  - atributo
  - universal

```html
  <p id="text" class="pink" title="t">
    Lorem ipsum dolor sit amet
  </p>

  <p>
    Lorem ipsum dolor sit amet
  </p>
```

```css
  p {
    color: violet;
  }

  #text {
    color: violet
  }

  .pink {
    color: violet;
  }

  [title] {
    color: violet;
  }

  [title="t"] {
    color: violet;
  }

  [class="pink"] {
    color: violet;
  }

  [id="text"] {
    color: violet;
  }

  * {
    color: violet;
  }
```
