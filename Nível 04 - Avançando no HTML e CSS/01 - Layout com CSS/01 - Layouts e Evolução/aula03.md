# Variáveis
  ```html
    <div></div>
  ```

  ```css
    :root {
      --bg-color: lightblue;
    }

    body {
      background-color: var(--bg-color);
    }

    div {
      --bg-color: lightgreen;
      width: 40px;
      height: 40px;
      background-color: var(--bg-color);
    }
  ```