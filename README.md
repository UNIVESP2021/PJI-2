# PROJETO INTEGRADOR 2, EIXO COMPUTAÇÃO - TURMA 2021/2 UNIVESP CUBATÃO

### PROJETO: Gerenciador Informações Técnicas.

--- 
O projeto consiste em um framework web baseado em #React, #Javascript & #Spring boot e #Java para que sejam adicionados
links para documentos técnicos de plantas industriais a fim de reduzir o tempo de atendimento das equipes de manutenção ao eliminar as diversas idas e vindas as estações de comando para consultar os manuais das máquinas. 
---

#### Preparando o banco de dados.

Rode os seguintes comandos no prompt (DOS).

`mysql -u root -p `
//use seu usuário e senha de costume, nas linhas
seguintes será criada uma conexão à parte, com outro 
usuário e senha separado do seu.

`CREATE DATABASE GerenciadorDeInfoTecnicas;`

`CREATE USER 'PJI2'@'localhost' IDENTIFIED BY 'Univesp20212';`

`GRANT ALL PRIVILEGES ON GerenciadorDeInfoTecnicas.* TO 'PJI2'@'localhost';`

`FLUSH PRIVILEGES;`

`exit;`

Todas as tabelas necessárias para a aplicação serão geradas na primeira execução do código através do flyway.

