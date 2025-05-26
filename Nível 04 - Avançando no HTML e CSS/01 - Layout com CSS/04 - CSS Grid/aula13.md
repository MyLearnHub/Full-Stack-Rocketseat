# Propriedades Grid Auto

## Propriedades Auto
- grid-auto-flow
- grid-auto-rows
- grid-auto-columns

```html
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Testimonials</li>
    <li>Contact</li>
  </ul>
```

```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    display: grid;
    list-style: none;

    grid-auto-flow: row; /* padrão */
    grid-auto-rows: 1fr; /* padrão com height */
    grid-auto-rows: 50px;
    grid-auto-rows: 50px 1fr;
    grid-auto-rows: 1fr 2fr 3fr;

    height: 100vh;
  }
```

```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    display: grid;
    list-style: none;

    grid-auto-flow: column;
    grid-auto-column: 1fr; /* padrão */
    grid-auto-column: 50px 100px 200px;
    grid-auto-column: max-content;
    
    height: 100vh;
  }
```