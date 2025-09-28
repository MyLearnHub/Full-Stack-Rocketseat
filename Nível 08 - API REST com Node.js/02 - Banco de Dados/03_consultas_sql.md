# Consultas SQL

---

## Where com Igual

```sql
SELECT * FROM products WHERE name = 'Mouse'
```

## Where com Like

```sql
SELECT * FROM products WHERE name LIKE '%head%'
```

## Filtrando Valores

```sql
-- Seleciona valores diferentes.
SELECT * FROM products WHERE price <> 800

-- Seleciona valores maior.
SELECT * FROM products WHERE price > 500.50

-- Seleciona valores menor.
SELECT * FROM products WHERE price < 600

-- Seleciona por maior ou igual.
SELECT * FROM products WHERE price >= 500.50

-- Seleciona por menor ou igual.
SELECT * FROM products WHERE price <= 800
```

## Operadores AND e OR

```sql
-- O operador AND retorna os registros que atende todos os critérios (TRUE).
SELECT * FROM products WHERE price > 500 AND price < 1000
  
-- O operador OR retorna os registros que atende pelo menos um dos critérios.
SELECT * FROM products WHERE price > 500 OR price < 1000
```

## Parênteses

```sql
-- Operadores AND e OR juntos.
SELECT * FROM products WHERE (price > 45 AND price < 1000) AND (category = 'audio' OR category = 'image')
```

## Between

## IN

## Order By

## LIMIT

## Count

## Sum

## Avg

## Aliases

## Group By
