# Começando o projeto

---

## Conhecendo o projeto

[](https://www.figma.com/community/file/1469664201049887575)

## Conhecendo o Tailwind CSS

[Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.](https://tailwindcss.com/)

## Instalando o Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

```tsx
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
})
```

```css
@import "tailwindcss";
```

```tsx
export function App() {
  return <h1 className="text-3xl text-blue-500">App</h1>
}
```

## Extensão do Tailwind CSS

- Tailwind CSS IntelliSense

## Configurando o Tailwind CSS

```tsx
@import "tailwindcss";

@theme {
  --default-font-family: "Open Sans", serif;

  --color-gray-100: #1f2523;
  --color-gray-200: #4d5c57;
  --color-gray-300: #cdd5d2;
  --color-gray-400: #e4ece9;
  --color-gray-500: #f9fbfa;

  --color-green-100: #1f8459;
  --color-green-200: #2cb178;

  --text-xxs: 0.625rem;
}
```

```tsx
export function App() {
  return <h1 className="text-2xl font-bold text-gray-200 text-xxs">App</h1>;
}
```
