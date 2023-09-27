create table documentos(
                           id bigint not null auto_increment,
                           ativo tinyint not null ,
                           nome varchar(100) not null,
                           descricao varchar(100) not null,
                           link varchar(200) not null,

                           primary key (id)

);
update documentos set ativo = 1;