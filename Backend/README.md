# Reactgram-Backend

Projeto feito em NodeJS para fornecer uma API aos projetos Frontend e Mobile.

## Scripts Disponíveis

Na pasta do projeto você pode executar:

### `npm start`

Executa o projeto em modo de desenvolvimento.<br>
Use [http://localhost:3333](http://localhost:3333) para fazer requisições.

O serviço será reiniciado sempre que houverem alterações.<br>
Qualquer problema ou erro será mostrado no console.

## Configurando

Crie/Altere o arquivo `config/mongoDB.js` com a URL do serviço usado para banco de dados Mongo. Abaixo um exemplo: 

```
module.exports = {
	url: 'mongodb+srv://user:pass@cluster.mongodb.net/database?retryWrites=true&w=majority'
}
```

Recomendo utilizar o [mongoDB Atlas](https://www.mongodb.com/cloud/atlas).