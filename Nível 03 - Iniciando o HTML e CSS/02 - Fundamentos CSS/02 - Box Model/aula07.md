# Margin

```html
  <div class="margin">block</div>
  <span class="margin">inline</span>
```

```css
  div, span {
    border: solid red;
    width: 50%
  }

  .margin {
    margin: 30px; 
    /* margin-top: 30px;  */
    /* margin-left: 60px;  */
    /* margin: 30px 10px;  */
    /* margin: 30px 10px 80px;  */
    /* margin: 30px 10px 80px 4rem;  */
    margin: auto;
  }
```

## Margin Collapsing
  - Quando duas bordas se encontram, elas se unem.
  ```html
    <div class="margin">block</div>
    <div class="margin">block</div>
  ```

```css
  div, span {
    border: solid red;
    width: 50%
  }

  .margin {
    margin: 30px; 
  }
```
