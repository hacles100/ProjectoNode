const { response, request } = require('express');
const express = require('express'); //importação do express

const app = express();

app.use(express.json());

/**
 * Métodos HTTP:
 * GET: Buscar informações do backend
 * POST: Criar uma informação no backend
 * PUT/PATCH: Alterar uma informação no backend
 * DELETE: Deletar uma  no backend
 */

/**
 * Tipos de Parametros:
 * Query Params: Filtros e Paginação
 * Route Params: Identificar Recursos (Actualizar/Deletar)
 * Request Body: Conteudo na hora de criar ou editar um recurso (JSON)
 */


app.get('/projects', (request, response) => {
  const query = request.query;

  console.log(query);


   return response.json([
       'Projecto 1',
       'Projecto 2',
   ]);
});

app.post('/projects', (request, response) => { 
    const body = request.body;
    
    console.log(body);

  return response.json([
      'Projecto 1',
      'Projecto 2',
      'Projecto 3',
  ]);
});


app.put('/projects/:id', (request, response) => {
    const params = request.params;

    console.log(params);

  return response.json([
      'Projecto 4',
      'Projecto 2',
      'Projecto 3',
  ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projecto 2',
        'Projecto 3',
    ]);
});

app.listen(3333,() => {
    console.log('🤓 Backend Started!');
});