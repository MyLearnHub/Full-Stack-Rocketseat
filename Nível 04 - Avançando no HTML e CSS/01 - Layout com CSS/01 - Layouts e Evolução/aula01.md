# Layouts e Evolução

## Normal Flow
```html
  <div>texto</div>
  <div>
    <span>texto 2</span>
    continuação
  </div>
```

## Table
```html
  <table>
    <tr>
      <td>conteúdo</td>
      <td>outro</td>
    </tr>
    <tr>
      <td>abaixo</td>
      <td>ao lado</td>
    </tr>
  </table>
```

## Tableless
```html
  <div style="float: left;">conteúdo</div>
  <div style="float: right;">outro conteúdo</div>
  <div style="clear: both;">mais conteúdo</div>
```

## Flexbox
```html
  <div class="container">
    <span>1</span>
    <div>2</div>
    <span>3</span>
    <span>4</span>
  </div>
```

```css
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
```

## Grid 
  ```html
  <div class="container">
    <span>1</span>
    <div>2</div>
    <span>3</span>
    <span>4</span>
  </div>
```

```css
  .container {
    display: grid;
    grid-template-columns: 20px 20px;
  }
```
