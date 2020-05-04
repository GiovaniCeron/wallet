create table alerta_gastos (
    idalerta bigserial,
    descricao text not null,
    tpalerta character(1) default 'M' not null,
    idusuario bigint not null,
    dtcadastro timestamp not null,
    ativo boolean not null default false,
    idusuario_cancel bigint,
    dtcancelado timestamp,
    constraint alerta_gastos_pk primary key (idalerta),
    constraint alerta_gastos_idusuario_fk foreign key (idusuario) references usuario(idusuario),
    constraint alerta_gastos_idusuario_cancel_fk foreign key (idusuario_cancel) references usuario(idusuario)
);