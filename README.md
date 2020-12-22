<h3 align="center">
  API Application USING ORACLE DB
</h3>

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [Oracle database](https://imasters.com.br/banco-de-dados/deploy-de-um-banco-oracle-em-um-container-docker-linux-e-conexao-via-sql-developer) ps: this sysdba password: oradoc_db1
> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/x && cd oracle-api
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'

# Create the instance of ORACLE DATABASE using docker
$ docker run -d -it — name oradb -p 1521:1521 store/oracle/database-enterprise:12.2.0.1

$ docker exec -it oradb bash -c "source /home/oracle/.bashrc; sqlplus /nolog"

$ connect sys as sysdba;
#password is "oradoc_db1"
$ alter session set “_ORACLE_SCRIPT”=true;
$ create user admin identified by admin;#usuário e senha
$ GRANT ALL PRIVILEGES TO admin;

#case don't have SQLPLUS:
(https://medium.com/@gpmlinux/instalar-sqldeveloper-fdcd86dbec83)

#Get starting Database
$ docker start oradb

# Make a copy of 'ormconfig.example.json' to 'ormconfig.json'
$ cp ormconfig.example.json ormconfig.json

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```
