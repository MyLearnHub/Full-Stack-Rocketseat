# Relacionamentos

---

## Compreendendo Relacionamentos

![image.png](assets/aula04-1.png)

![image.png](assets/aula04-2.png)

![image.png](assets/aula04-3.png)

## Tipos de Relacionamentos

![image.png](assets/aula04-4.png)

![image.png](assets/aula04-5.png)

![image.png](assets/aula04-6.png)

## Criando Tabela de Alunos

```sql
CREATE TABLE students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);
```

## Populando Tabela Alunos

```sql
INSERT INTO students (name) VALUES ('Lucas Santos'); 
INSERT INTO students (name) VALUES ('Beatriz Lima'); 
INSERT INTO students (name) VALUES ('Gabriel Oliveira'); 
INSERT INTO students (name) VALUES ('Mariana Costa'); 
INSERT INTO students (name) VALUES ('Felipe Souza'); 
INSERT INTO students (name) VALUES ('Larissa Pereira'); 
INSERT INTO students (name) VALUES ('Rafael Mendes'); 
INSERT INTO students (name) VALUES ('Amanda Silva'); 
INSERT INTO students (name) VALUES ('Juliana Rodrigues'); 
INSERT INTO students (name) VALUES ('Pedro Ferreira');

SELECT * FROM students
```

## Criando Tabela de Cursos

```sql
CREATE TABLE courses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);
```

## Populando Tabela de Cursos

```sql
INSERT INTO courses (name) VALUES ('HTML');
INSERT INTO courses (name) VALUES ('CSS');
INSERT INTO courses (name) VALUES ('Javascript');
INSERT INTO courses (name) VALUES ('Typescript');
INSERT INTO courses (name) VALUES ('React');
INSERT INTO courses (name) VALUES ('Node.js');
INSERT INTO courses (name) VALUES ('Git');
INSERT INTO courses (name) VALUES ('Github');
INSERT INTO courses (name) VALUES ('Express.js');
INSERT INTO courses (name) VALUES ('Banco de dados');

SELECT * FROM courses;
```

## Relacionamento Um Para Um

```sql
CREATE TABLE student_address (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER UNIQUE NOT NULL,
  street TEXT NOT NULL,
  city TEXT NOT NULL,
  
  FOREIGN KEY (student_id) REFERENCES students(id)
)
```

## Restrições de Chave Única e Estrangeira

```sql
SELECT * FROM students
SELECT * FROM student_address

INSERT INTO student_address
(student_id, street, city) 
VALUES
(1, 'Rua São João', 'São Paulo')

INSERT INTO student_address
(student_id, street, city) 
VALUES
(2, 'Rua Dom Pedro', 'Rio de Janeiro')
```

## Inner Join

```sql
SELECT * FROM students
  
SELECT a.id, a.student_id, s.name, a.street, a.city
FROM student_address AS a
INNER JOIN students AS s ON s.id = a.student_id
```

## Relacionamento Um Para Muitos

```sql
CREATE TABLE course_modules (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  course_id INTEGER NOT NULL,

  FOREIGN KEY (course_id) REFERENCES courses(id)
)
```

## Inserindo Módulos

```sql
INSERT INTO course_modules 
(name, course_id) 
VALUES
('Fundamentos do CSS', 2),
('Layout com CSS', 2),
('CSS Functions', 2);

INSERT INTO course_modules 
(name, course_id) 
VALUES
('Fundamentos do HTML', 1),
('Formulários', 1);

SELECT * FROM courses
SELECT * FROM course_modules
```

## Exibindo Curso no Módulo

```sql
SELECT m.id, m.name, m.course_id, c.name
FROM course_modules AS m
INNER JOIN courses AS c ON c.id = m.course_id
```

## Relacionamento Muito Para Muitos

```sql
CREATE TABLE students_courses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER NOT NULL, 
  course_id INTEGER NOT NULL,

  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
)
```

## Vinculando Alunos em Cursos

```sql
INSERT INTO students_courses 
(student_id, course_id)
VALUES
(1, 2)
(4, 1)
(1, 1)

SELECT * FROM students
SELECT * FROM courses
  
SELECT * FROM students_courses
```

## Select em Muito Para Muitos

```sql
SELECT sc.id, sc.student_id, s.name AS student_name, sc.course_id, c.name AS course_name
FROM students_courses AS sc
INNER JOIN students AS s ON s.id = sc.student_id
INNER JOIN courses AS c ON c.id = sc.course_id
```
