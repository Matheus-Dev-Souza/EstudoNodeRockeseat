const express = require('express');

const app = express();

/**
 * Get - Buscar uma informação dentro do servidor
 * Post - Inserir uma informação no servidor
 * Put - Alterar uma informação no servidor
 * Patch - Alterar uma informação especifica
 * Delete - Deletar uma informação no servidor
 * 
 */


app.get("/NodeCurso", (request, response) => {
    return response.json([" Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/NodeCurso", (request, response) => {
    return response.json([" Curso 1", "Curso 2", "Curso 3", "Curso 4"]);

});

app.put("/NodeCourso/:id", (request, response) => {
    return response.json([" Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/NodeCourso/:id", (request, response) => {
    return response.json([" Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/NodeCourso/:id", (request, response) => {
    return response.json([" Curso 6", "Curso 3", "Curso 4"]);
});

app.listen(3030);

