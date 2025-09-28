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

```sql
-- SELECT * FROM products WHERE price >= 600 AND price <= 1200

SELECT * FROM products WHERE price BETWEEN 600 AND 1200
```

## IN

```sql
-- Seleciona multiplos valores númericos.
SELECT * FROM products WHERE price IN (800, 550, 1200)

-- Seleciona multiplos valores do tipo texto.
SELECT * FROM products WHERE category IN ('image', 'audio')
```

## Order By

```sql
-- ASC (ascendente/crescente)
SELECT * FROM products ORDER BY price
SELECT * FROM products ORDER BY price ASC
  
-- DESC (descendente/decrescente)
SELECT * FROM products ORDER BY price DESC

-- WHERE + ORDER BY
SELECT * FROM products WHERE category = 'audio' ORDER BY price DESC

-- ORDER BY com texto
SELECT * FROM products ORDER BY name
```

## LIMIT

```sql
SELECT * FROM products ORDER BY price DESC LIMIT 3
```

## Count

```sql
SELECT * FROM products

SELECT COUNT(*) FROM products
  
SELECT COUNT(name) FROM products
  
SELECT COUNT(price) FROM products
  
SELECT COUNT(*) FROM products WHERE price >= 600
```

## Sum

```sql
SELECT * FROM products

SELECT SUM(price) FROM products
  
SELECT SUM(price) FROM products WHERE category = 'audio'
  
SELECT SUM(name) FROM products
```

## Avg

```sql
SELECT * FROM products

SELECT AVG(price) FROM products
  
SELECT AVG(price) FROM products WHERE category = 'audio'
  
-- average
```

## Aliases

```sql
SELECT COUNT(*) AS 'TOTAL' FROM products
  
SELECT COUNT(*) AS TOTAL FROM products

-- O AS é opcional.
SELECT COUNT(*) TOTAL FROM products

-- Nome composto
SELECT COUNT(*) AS 'TOTAL DE PRODUTOS' FROM products

SELECT COUNT(*) AS [TOTAL DE PRODUTOS] FROM products

SELECT id AS code, name, price FROM products
```

## Group By

```sql
SELECT * FROM products

SELECT category, COUNT(*) AS total
FROM products
WHERE price > 600
GROUP BY category
ORDER BY total DESC
```