create table conta (
    idconta bigserial,
    descricao text not null,
    idtipoconta bigint not null,
    valor numeric(17,2) not null,
    isparcelado boolean not null default false,
    ismensal boolean not null default false,
    dtcadastro timestamp not null,
    dtvencimento timestamp not null,
    qtdparcelas timestamp not null,
    idusuario  bigint not null,
    pago boolean not null default false,
    dtpagamento timestamp,
    ativo boolean not null default false,
    constraint conta_idconta_pk primary key (idconta),
    constraint conta_idtipoconta_fk foreign key (idtipoconta) references tipo_conta(idtipoconta),
    constraint conta_idusuario_fk foreign key (idusuario) references usuario(idusuario)
);