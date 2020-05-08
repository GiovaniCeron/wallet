create table cofrinho (
    idcofrinho bigserial,
    descricao text not null,
    valor_mensal numeric(17,2) not null,
    valor_guardado numeric(17,2) not null,
    valor_juros numeric(17,2) not null,
    valor_total numeric(17,2) not null,
    idusuario bigint not null,
    dtcadastro timestamp not null,
    ativo boolean not null default false,
    idusuario_cancel bigint,
    dtcancelado timestamp,
    constraint cofrinho_pk primary key (idcofrinho),
    constraint cofrinho_idusuario_fk foreign key (idusuario) references usuario(idusuario),
    constraint cofrinho_idusuario_cancel_fk foreign key (idusuario_cancel) references usuario(idusuario)
);