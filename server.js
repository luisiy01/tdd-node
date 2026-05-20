const express = require('express');
const axios = require('axios');
const parser = require('body-parser');
const { users } = require('./endpoints');
const app = express();
const port = 3000;

app.use(parser.urlencoded({ extended: false }));

app.use(parser.json());

const userHandlres = users({ axios });

app.get('/', userHandlres.get);
app.post('/', userHandlres.post);
app.put('/:id', userHandlres.put);
app.delete('/:id', userHandlres.delete);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
