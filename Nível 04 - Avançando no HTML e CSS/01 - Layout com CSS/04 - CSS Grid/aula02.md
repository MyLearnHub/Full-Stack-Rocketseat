# Fundamentos do Grid no código

## Propriedades Fundamentais
  Todo grid é composto de 2 principais grupos:
  `container: o pai` e `itens: o(s) filho(s)`

  ---
  ### Container (pai)
  - display: grid;

  ```html
    <div id="app">
      <div>1</div>
      <span>2</span>
      <span>3</span>
    </div>
  ```

  ```css
    #app {
      display: grid;
      /* display: inline-grid; */

      /* margin-top: 30px; */ /* Propriedade que o grid aceita, mas o inline não */
    }

    #app > div {
      border: 1px solid red;
    } 

    span {
      border: 1px solid blue;
      /* margin-top: 30px; */
    }
  ```
  