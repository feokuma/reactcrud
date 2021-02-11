# Aplicação de exemplo de crud com react
Aplicação de exemplo para estudo de react seguindo o post [CRUD App with React And JSON-Server](https://medium.com/weekly-webtips/use-react-with-json-server-and-create-simple-crud-app-b2bf58cd4558)

## Pré-Requisitos / Ferramentas
- [NodeJs](https://nodejs.org/en/download/)
- [Json-Server](https://github.com/typicode/json-server)

## Bibliotecas
- [React 17.0.1](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)

## Executando o projeto
Este projeto tem foco no estudo do react e estamos utilizando o Json-Server como backend para facilitar a criação de infraestrutura. Portanto para que a aplicação funcione é necessário que o Json-Server esteja em execução. 

### Executando Json-Server
Navegue até o diretório `database` e execute o seguinte comando:
```
$ npm json-server --watch db.json --port 3002
```

### Executando a aplicação
Para executar a aplicação, depois de executar o json-server em outro terminal, execute o seguinte comando no diretório raiz do projeto
```
$ npm run start
```
