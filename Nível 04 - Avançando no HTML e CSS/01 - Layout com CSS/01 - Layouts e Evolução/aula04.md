# Pseudo-classes e pseudo-elements
```html
  <section>
    <div>1</div>
    <div class="nao">2</div>
    <div>3</div>
  </section>
```

```css
  :root {

  }

  div {
    width: 40px;
    height: 40px;
    border: solid;
    text-align: center;
    line-height: 250%;
    margin-top: 4px;
  }

  div:hover {
    background-color: lightcoral;
  }

  div:not(.nao) {
    background-color: lightcoral;
  }

  div:has(.nao) {
    background-color: lightcoral;
  }

  section:has(div:hover) {
    border: 2px solid red;
  }

  div:nth-child(3) {
    background-color: lightblue;
  }

  /* pseudo-elements */
  div::first-letter {
    font-size: 40px
  }

  div {
    position: relative;
  }

  div::before {
    content: "";
    height: 6px;
    width: 2px;
    background-color red;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }

  div::after {
    content: "";
    height: 6px;
    width: 2px;
    background-color red;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
```