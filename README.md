## Descrição

Este é o projeto Backend da API de teste **Dysrup**. As tecnologias usados no projeto são:

- Framework Nestjs (versão 10.2.1)
- Typescript (versão 5.1.3)
- TypeORM (versão 0.3.17)
- MySQL (versão 8.0.31)

## Instalação

```bash
$  npm  install
```

## Rodando a Aplicação

```bash

# development
$  npm  run  start


# watch mode
$  npm  run  start:dev


# production mode
$  npm  run  start:prod

```

**Banco de dados:**
A aplicação vai sincronizar as tabelas necessárias para funcionamento da API automaticamente, tudo que será necessário fazer é criar o banco de dados. O nome do banco deve ser definido no arquivo **_.env_** na raiz da aplicação.

Por padrão o nome é **project_dysrup**

## Documentação da API

Apos rodar a aplicação, é possível acessar a documentação da API no endereço a seguir:

**http://localhost:3000/docs**
