## Description

Desafío FullStack

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test artillery 

you need to run the next command in the root
```bash
$ artillery run iacc-load-test.yml  
```

## Curl command

add a alumno to a curso
```bash
$ curl --location --request PUT 'localhost:3003/cursos/1/alumnos/1'
```
get a alumno by id
```bash
$ curl --location --request GET 'localhost:3003/alumnos/1'
```

get all the alumnos from a curso
```bash
$ curl --location --request GET 'localhost:3003/cursos/1/alumnos'
```
