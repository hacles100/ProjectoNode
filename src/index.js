const { response, request } = require('express');
const express = require('express'); //importação do express

const app = express();

app.get('/projects', (request, response) => {
   return response.json([
       'Projecto 1',
       'Projecto 2',
   ]);
});

app.post('/projects', () => { 
  return response.json([
      'Projecto 1',
      'Projecto 2',
      'Projecto 3',
  ]);
});


app.put('/projects/:id', (request, response) => {
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