#  CareApi
[![Build Status](https://travis-ci.org/condessalovelace/mavenquickstart.svg?branch=master)](https://travis-ci.org/condessalovelace/mavenquickstart) ![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=br.com%3Amavenquickstart&metric=alert_status)

This project illustrates an api in nodejs and TypeORM.

## Starting

To run the project, you will need to install the following programs:

- [Express: a toolkit, necessary to carry out the project] (https://expressjs.com/pt-br/)
- [Nodejs: Required to create the project] (https://nodejs.org/en/)
- [TypeORM: Required to init from project] (https://typeorm.io/#/)
- [Mysql: Required a database to create the tables etc] (https://www.mysql.com/)
- [XAMPP: Required a server to run the database] (https://www.apachefriends.org/pt_br/index.html)
- [VS Code: For project development] (https://code.visualstudio.com/)

## Development

To start the development, it is necessary to clone the GitHub project in a directory of your choice:

```
$ cd "directory of your choice"
$ git clone https://github.com/Suspir0n/Care.git
```

### Construction

To build the api with TypeORM, execute the commands below:

```
$ typeorm init --name "name from your api" --express --database "database from your choice"
```

The command will download all necessary files, with an example entity and an example controller for you.

With that, to make your project safer, faltario you add JWT and MD5.

Well, the JWT (JSON Web Token) is a data transfer system that can be sent via POST or in an HTTP header (header) in a “secure” way, this information is digitally signed by an HMAC algorithm, or a pair of public / private keys using RSA 
and the MD5 has a cryptographic hash function, used more in terms of saving passwords in a database.
To execute both, use the following commands:

```
$ npm install jsonwebtoken
$ npm install md5
```

The command will download all the dependencies you need to use this tool.

## Features

The project can be used as a model to start the development of a Nodejs project using TypeORM. It also demonstrates in a practical way how to create a TypeORM api quickly and easily.

## Configuration

To execute the project, it is necessary to use VsCode or an IDE of your preference, so that it identifies the dependencies necessary for execution in the repository. Once the project is imported, it will be possible to test its functionality in real time.

## Contributions

Contributions are always welcome! I hope I have helped someone in need.
