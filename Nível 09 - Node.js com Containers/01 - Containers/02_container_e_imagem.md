# Container e Imagem

---

## Conhecendo o Docker Hub

[Docker Hub](https://hub.docker.com/)

## Criando o Dockerfile

```docker
FROM node:18-alpine3.20

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3333

CMD [ "npm", "start" ]
```

## Docker Ignore

```docker
node_modules
dist
Dockerfile
.git
.dockerignore
.gitignore
```

## Build Dockerfile

```bash
docker ps
```

```bash
docker image ls
```

```bash
docker build -t api .
```

## Rodando Nosso Container

```bash
docker run -p 3333:3333 api
```

## Executando em Background

```bash
docker run -p 3333:3333 f8e350957a6c
```

```bash
docker run -p 3333:3333 -d api
```

## Visualizando Logs e Histórico

```bash
docker logs 35ee42e4780e
```

```bash
docker history api
```

## Estados do Container

```bash
docker pause 35ee42e4780e
```

```bash
docker unpause 35ee42e4780e
```

```bash
docker stop 35ee42e4780e
```

```bash
docker ps -a
```

```bash
docker start 35ee42e4780e
```

## Removendo Container e Imagem

```bash
docker rm 35ee42e4780e
```

```bash
docker rm 627e03c442fa -f
```

```bash
docker rmi f76f959b2a49
```

## Utilizando Tag para Versionar Imagens

```bash
docker build -t api:v1 .
```

```bash
docker run -p 3333:3333 -d api:v2
```

```bash
docker rmi -f c900bd8e2dd0
```
