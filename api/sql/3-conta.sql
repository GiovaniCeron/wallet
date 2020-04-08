create table conta (
    idconta bigserial,
    descricao text not null,
    idtipoconta bigint not null,
    valor numeric(17,2) not null,
    idparcelado boolean not null default false,
    dtcadastro timestamp not null,
    idusuario  bigint not null,
    idpago boolean not null default false,
    idusuariopag bigint not null,
    dtpagamento timestamp,
    ativo boolean not null default false,
    constraint conta_idconta_pk primary key (idconta),
    constraint conta_idtipoconta_fk foreign key (idtipoconta) references tipo_conta(idtipoconta),
    constraint conta_idusuario_fk foreign key (idusuario) references usuario(idusuario),
    constraint conta_idusuariopag_fk foreign key (idusuariopag) references usuario(idusuario)
);