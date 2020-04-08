create table parcela (
    idparcela bigserial,
    idconta bigint not null,
    nuparcela bigint not null,
    valor numeric(17,2) not null,
    dtvencimento date not null,
    idpago boolean not null default false,
    idusuariopag bigint not null,
    dtpagamento timestamp,
    ativo boolean not null default false,
    constraint parcela_idparcela_pk primary key (idparcela),
    constraint parcela_idconta_fk foreign key (idconta) references conta(idconta),
    constraint parcela_idusuariopag_fk foreign key (idusuariopag) references usuario(idusuario)
);