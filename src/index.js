const express = require('express'); //importação do express

const app = express();

app.get('/', (request, response) => {
   return response.json({ message: 'Hello World' });
});

app.listen(3333,() => {
    console.log('🤓 Backend Started!');
});