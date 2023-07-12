import express from 'express';

const app = express()
app.use(express.json());
app.get('/hello', (req, res) => {res.send('Hello World!')})
app.listen(4000)