# Grid ou Flex

```html
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
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
    /* Com Grid */
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    gap: 16px;

    /* Com Flex */
    display: flex;
    gap: 16px;

    list-style: none;
  }
```
