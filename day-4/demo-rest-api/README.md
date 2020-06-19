## Workshop REST API with express

- Install and use the express library
- Better structure of router
- Integrate with database (sequelize + postgresql)

## Working with sequelize

### 1 :: Migrate model and table with sequelize-cli

```
$npm i -s sequelize
$sequelize-cli init
$sequelize-cli model:generate --name user_somkiats --attributes id:number,firstName:string,lastName:string --models-path ./src/models

$npm i -s pg
$sequelize-cli db:migrate --models-path ./src/models
```

### 2 :: Develop the database connection and user service

### API testing with [Newman](https://www.npmjs.com/package/newman#using-reporters-with-newman)

```
$npm install -g newman
$newman run demo-api.postman_collection.json -r cli,html
```
