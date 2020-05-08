create table parcela (
    idparcela bigserial,
    idconta bigint not null,
    valor numeric(17,2) not null,
    dtvencimento date not null,
    pago boolean not null default false,
    dtpagamento timestamp,
    ativo boolean not null default false,
    constraint parcela_idparcela_pk primary key (idparcela),
    constraint parcela_idconta_fk foreign key (idconta) references conta(idconta)
);