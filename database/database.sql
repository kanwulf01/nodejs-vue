CREATE DATABASE firstapi;

CREATE TABLE Users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email text,
);

INSERT INTO Users(name,email) VALUES
('joe','joe@hotmail.com'),
('ryan','ryan@faztweb.com');