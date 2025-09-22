# Tipos Personalizados no TypeScript

---

## Conhecendo Interface no TypeScript

```ts
interface Product {
    id: number,
    name: string
}

function newProduct(product: Product) {
    console.log(product.name)
}

newProduct({ id: 1, name: "Produto x" })
```

## Como Estender Interface

```ts
interface Person {
    id: number,
    name: string,
}

interface Teacher extends Person {
    // id: number,
    // name: string,
    subjects: string[]
}

interface Student extends Person {
    // id: number,
    // name: string,
    age: number
}

let teacher: Teacher = { id: 1, name: "Rodrigo", subjects: ["JavaScript", "TypeScript"] }

let student: Student = { id: 2, name: "João", age: 23 }
```

## Usando Type

```ts
type Product = {
    id: number,
    name: string
}

function newProduct(product: Product) {

}

newProduct({ id: 1, name: "Produto x" })

type SelectResponse = Product[] | null

function selectProducts(): SelectResponse {
    return null
}
```

## Intersecção de Tipos

```ts
type Person = {
    id: number,
    name: string
}

type Teacher = Person & {
    subjects: string[]
}

type Student = Person & {
    age: number,
}

let teacher: Teacher
let student: Student
```

## Diferença Entre Type e Interface

```ts
// Interface x Type

interface IBaseProduct {
    price: number
}

interface IProduct extends IBaseProduct {
    id: number,
    name: string
}

interface IProduct {
    quantity: number
}

type TBaseProduct = {
    price: number
}

type TProduct = TBaseProduct & {
    id: number,
    name: string
}

let product1: IProduct = { id: 1, name: "Produto 1", price: 500, quantity: 12 }

let product2: TProduct = { id: 2, name: "Produto 2", price: 550 }

type TypeString = string
type TypeNumber = number

// interface X extends string {}
```

## Asserção de Tipos

```ts
type UserResponse = {
    id: number,
    name: string,
    avatar: string
}

let userResponse = {} as UserResponse;
```

## Restringindo Valores

```ts
type Size = "small" | "medium" | "large"

let size: Size

size = "small"
```

## Enums

```ts
enum Profile {
    Admin = 1,
    Client = 2,
    Seller = 3
}

let profile: number = Profile.Admin
console.log(Profile.Seller)
```

## Generic

```ts
/**
 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
*/

function useState<T extends string | number = string>() {
    let state: T;

    function get() {
        return state;
    }

    function set(newValue: T) {
        state = newValue
    }

    return { get, set }
}

let newState = useState<string>()
newState.get()
newState.set('Rodrigo')
// newState.set(123)
newState.set('Amanda')
```
