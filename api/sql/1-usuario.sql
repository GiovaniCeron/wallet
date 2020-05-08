create table usuario (
    idusuario bigserial,
    nome_usuario text not null,
    nucpf bigint not null,
    login text not null,
    senha text not null,
    dtcadastro timestamp,
    constraint usuario_idusuario_pk primary key (idusuario)
);