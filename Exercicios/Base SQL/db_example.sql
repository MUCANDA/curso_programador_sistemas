

DROP TABLE IF EXISTS generos;
CREATE TABLE generos (
    id INTEGER PRIMARY KEY,
    descricao VARCHAR(63)

);
INSERT INTO generos (id, descricao) VALUES

(1,'masculino'),
(2, 'feminino');

DROP TABLE IF EXISTS turnos;
CREATE TABLE turnos (
    id INTEGER PRIMARY KEY,
    periodo VARCHAR(31)
);
INSERT INTO turnos (id, periodo) VALUES
(1,'Vespertino'),
(2, 'Matutino'),
(3, 'Noturno');






DROP TABLE IF EXISTS cursos;

CREATE TABLE cursos (
    id INTEGER PRIMARY KEY,
    nome VARCHAR(255),
    turno_id  INTEGER
);

INSERT INTO cursos (id, nome, turno) VALUES
(1, 'Programador de Sistemas', 1),
(2, 'Banco de Dados', 3),
(3, 'Design de Interfaces', 2),
(4, 'Engenharia de Software', 2),
(5, 'Segurança da Informação', 1),
(6, 'Desenvolvimento Mobile', 3),
(7, 'Análise de Sistemas', 2),
(8, 'Desenvolvimento Web', 1);

DROP TABLE IF EXISTS alunos;

CREATE TABLE alunos (
    id INTEGER PRIMARY KEY,
    nome VARCHAR(255),
    curso_id INTEGER,
    idade INTEGER,
    cpf CHAR(14),
    genero_id INTEGER,
    telefone VARCHAR(18),
    email VARCHAR(255)
);

INSERT INTO alunos (id, nome, curso_id, idade, cpf, genero_id, telefone, email) VALUES
(1, 'Fulano', 1, 34, '012.345.678-90', 1, '(62)98765-4321', 'fulaninho.maverick@exemplo.com'),
(2, 'Ciclano', 1, 26, '012.345.876-90', 1, '(62)95678-4321', 'ciclano@exemplo.com');

INSERT INTO alunos (id, nome, curso_id, idade, cpf, genero_id, telefone, email) VALUES
(3, 'Maria Oliveira', 8, 29, '123.456.789-01', 2, '(21)98765-4321', 'maria.oliveira@exemplo.com'),
(4, 'José Santos', 7, 31, '234.567.890-12', 1, '(11)99876-5432', 'jose.santos@exemplo.com'),
(5, 'Ana Paula', 6, 24, '345.678.901-23', 2, '(31)98765-4321', 'ana.paula@exemplo.com'),
(6, 'Carlos Pereira', 5, 37, '456.789.012-34', 1, '(41)98765-4321', 'carlos.pereira@exemplo.com'),
(7, 'Fernanda Lima', 1, 22, '567.890.123-45', 2, '(51)98765-4321', 'fernanda.lima@exemplo.com'),
(8, 'Ricardo Alves', 4, 28, '678.901.234-56', 1, '(61)98765-4321', 'ricardo.alves@exemplo.com'),
(9, 'Tatiane Costa', 3, 30, '789.012.345-67', 2, '(71)98765-4321', 'tatiane.costa@exemplo.com'),
(10, 'Roberto Martins', 2, 33, '890.123.456-78', 1, '(81)98765-4321', 'roberto.martins@exemplo.com');

UPDATE alunos SET idade = 40, email='oldmaverick@example.com' WHERE id = 1;





SELECT alunos.nome, alunos.idade, cursos.nome 
FROM alunos 
JOIN cursos  ON cursos.id = alunos.curso_id; 






SELECT alunos.nome, cursos.nome, generos.descricao
FROM alunos
JOIN cursos ON cursos.id=alunos.curso_id
JOIN generos ON generos.id=alunos.genero_id;

SELECT cursos.id, cursos.nome, turnos.periodo
FROM cursos 
JOIN turnos ON turnos.id = cursos.turno; 




