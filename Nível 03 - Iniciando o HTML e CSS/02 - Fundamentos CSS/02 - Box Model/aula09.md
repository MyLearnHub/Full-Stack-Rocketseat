# Box Sizing

```html
  <div class="padding">block</div>
  <!-- <span class="padding">inline</span> -->
```

```css
  div, span {
    width: 200px;
    height: 100px;
    border: solid;
  }

  .padding {
    box-sizing: border-box;
    /* padding: 20px 40px 0 10px; */
    padding: 40px;
  }
```
