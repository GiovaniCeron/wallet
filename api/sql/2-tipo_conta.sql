create table tipo_conta (
    idtipoconta bigserial,
    descricao text not null,
    pagar boolean not null default false,
    receber boolean not null default false,
    idusuario bigint not null,
    dtcadastro timestamp,
    ativo boolean not null default false,
    constraint tipo_conta_idtipoconta_pk primary key (idtipoconta),
    constraint tipo_conta_idusuario_fk foreign key (idusuario) references usuario(idusuario)
);