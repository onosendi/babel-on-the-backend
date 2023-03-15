import express from 'express';

const app = express();

app.get('/foo', (req, res) => {
  res.send('Foo');
});

app.listen('8001', () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 8001');
});
