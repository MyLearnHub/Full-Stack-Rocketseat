# Primeiros Passos

---

## Conhecendo o JavaScript

### JavaScript

É uma linguagem de programação que permite implementar interatividade e funcionalidades nas páginas web.

- Se você clica em algum botão e algo acontece, isso é JavaScript
- É client-side (lado do usuário). Isso significa que o código é executado no navegador do usuário.
- Permite acessar e manipular os elementos HTML, interações do usuário e comunicação com servidores.

### Flexibilidade

A princípio o JavaScript foi criado para ser executada e interpretada pelo navegador. Mas, por ser uma linguagem muito popular o JavaScript também passou a ser utilizado em outros contextos fora do navegador. Ou seja, também é possível criar aplicações:

- 🌐 Web
- 🖥️ Desktop
- 📱 Mobile
- 📡 API
- 🚀 Etc…

JavaScript não é Java.

## Alternativas para executar JavaScript

https://www.jsplayground.dev/

https://codepen.io/pen/

```js
console.log("Hello World");
```

## Estrutura dos arquivos

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aulas de JavaScript</title>
  </head>
  <body>
    <script src="./scripts.js"></script>
  </body>
</html>
```

```js
console.log("Hello World!");
console.log("Essa mensagem é do JS conectado com o HTML");
```

## Conectando JavaScript

index.html

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

script.js

```jsx
console.log("Paulo Alvares");
```

## Comentários em JavaScript

```js
// O console.log exibe no console um texto.
console.log("Paulo"); // Também posso colocar do lado.

/*
	Comentário de múltiplas linhas.
	
	Comentários são trecho de texto que podem ser adicionados junto com o código.
	
	O navegador ignora o texto marcado como comentário.
	
	Porque utilizar comentários durante seus estudos:
	- Fornecer informações adicionais sobre o que o código faz;
	- Deixar lemebretes de coisas a fazer;
	- Relembrar no futuro o que aquilo faz;
	- Etc...
*/
```

## Sintaxe

```js
// Sintaxe correta.
console.log("Olá, Paulo!");

// Sintaxe incorreta.
con.sole.log("Olá, Rodrigo!");

// No JavaScript ponto e vírgula é opcional.
console.log("Olá, João!");
console.log("Olá, João!")
```
