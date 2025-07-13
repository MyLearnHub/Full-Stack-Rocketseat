# Conectando JavaScript

---

## index.html

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aulas de JavaScript</title>

    <!-- Conexão dentro do head (Não recomendado) -->
    <script>
      console.log("Paulo Alvares");
    </script>
    <script src="./scripts.js"></script>
  </head>
  <body>
    <!-- ELEMENTOS HTML -->

    <!-- Conexão dentro do body (Recomendado) -->
    <script>
      console.log("Paulo");
    </script>
    <script src="./scripts.js"></script>
  </body>
</html>
```

## scripts.js

```js
console.log("Paulo Alvares");
```
