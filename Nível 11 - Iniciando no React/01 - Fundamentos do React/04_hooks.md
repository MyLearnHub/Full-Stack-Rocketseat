# Hooks

---

## Compreendendo Hooks

![image.png](attachment:05d19cd0-004d-4e59-9414-acddf1ec47e8:image.png)

![image.png](attachment:8ebd3c75-86d0-4cdd-82c7-5a045c932d98:image.png)

![image.png](attachment:dbe98949-4740-42a4-8267-f96c3bfe91eb:image.png)

![image.png](attachment:520d79bb-956c-4370-98b8-89b60f92ada8:image.png)

## Criando seu próprio Hook

```tsx
import "./global.css";

import { Button } from "./components/button";
import { useMessage } from "./hooks/useMessage";

import styles from "./app.module.css";

export function App() {
  const { show } = useMessage({ age: 18, name: "Rodrigo" });

  return (
    <div className={styles.container}>
      <Button
        name="Adicionar"
        onClick={() => show("Mensagem personalizada do meu hook!")}
      />
      <span>0</span>
      <Button name="Remover" />
    </div>
  );
}
```

```tsx
type Props = {
  name: string;
  age: number;
};

export function useMessage({ name, age }: Props) {
  function show(message: string) {
    console.log(name, age, message);
  }

  return { show };
}
```

## Estados e renderizações

![image.png](attachment:60ca31fd-4e22-412f-a587-38a658644ad8:image.png)

![image.png](attachment:cd0435da-eed0-4814-b422-797f61bd4a70:image.png)

![image.png](attachment:3f86149c-c108-42ed-a307-624e28d36432:image.png)

![image.png](attachment:d62331a5-cc21-4b36-9fb0-87a04a63b8f5:image.png)

![image.png](attachment:20f6490f-1036-4d47-8a9c-0fd82b7cf028:image.png)

![image.png](attachment:55e51c67-8ac0-4bf2-a4c8-4c984d6b25a1:image.png)

![image.png](attachment:b9a78bc8-a250-43e9-895a-87476123bac6:image.png)

![image.png](attachment:bb2bcffc-f4d3-4efc-9ae0-c1c5eb6957b0:image.png)

![image.png](attachment:b2c15d81-fbc4-4b0f-abad-e73262e5a4ab:image.png)

![image.png](attachment:5d64ace2-f4d0-4613-993e-ee151248a3b9:image.png)

## Compreendendo useEffect e useState

![image.png](attachment:fb3e971b-0730-4645-9198-5d6aa4f5dcfb:image.png)

![image.png](attachment:7b3289ed-a193-4089-903a-1a7ed012a8a4:image.png)

![image.png](attachment:4e36780e-3b22-44e9-bcc0-f44fb6aa82c1:image.png)

## useState na prática

```tsx
import "./global.css";
import { useState } from "react";

import { Button } from "./components/button";

import styles from "./app.module.css";

export function App() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleRemove() {
    setCount(count - 1);
  }

  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={handleAdd} />
      <span>{count}</span>
      <Button name="Remover" onClick={handleRemove} />
    </div>
  );
}
```

## useEffect na prática

```tsx
import "./global.css";
import { useState, useEffect } from "react";

import { Button } from "./components/button";

import styles from "./app.module.css";

export function App() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleRemove() {
    setCount(count - 1);
  }

  useEffect(() => {
    console.log("Oi!");
  }, [count]);

  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={handleAdd} />
      <span>{count}</span>
      <Button name="Remover" onClick={handleRemove} />
    </div>
  );
}
```

## useEffect em outros contextos

```tsx
import "./global.css";
import { useState, useEffect } from "react";

import { Button } from "./components/button";
import { useMessage } from "./hooks/useMessage";

import styles from "./app.module.css";

export function App() {
  const [count, setCount] = useState(0);

  const message = useMessage({ age: 18, name: "Rodrigo" });

  function handleAdd() {
    setCount(count + 1);
  }

  function handleRemove() {
    setCount(count - 1);
  }

  useEffect(() => {
    console.log("Oi!");
  }, []);

  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={handleAdd} />
      <span>{count}</span>
      <Button name="Remover" onClick={handleRemove} />
    </div>
  );
}
```

## Efeito colateral

```tsx
import "./global.css";
import { useState, useEffect } from "react";

import { Button } from "./components/button";
// import { useMessage } from "./hooks/useMessage";

import styles from "./app.module.css";

export function App() {
  const [count, setCount] = useState(0);

  // const message = useMessage({ age: 18, name: "Rodrigo" });

  function handleAdd() {
    setCount(count + 1);
  }

  function handleRemove() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    if (count > 0) {
      console.log("O valor mudou para: " + count);
    }
  }, [count]);

  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={handleAdd} />
      <span>{count}</span>
      <Button name="Remover" onClick={handleRemove} />
    </div>
  );
}
```
