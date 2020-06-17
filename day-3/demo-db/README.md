## Run with dotenv

```
$npm i g dotenv-cli
$dotenv -e xxx.txt node src/models/user-model.js
```

## Auto-generate model from databases

```
$npm uninstall -g sequelize-auto-v3
$sequelize-auto -h 10.10.99.142 -d product_db -u user -x pass -p 5432 -e postgres
```
