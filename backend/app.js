const express = require('express');
const cors = require('cors');
require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Create app
const app = express();

// Middlewares
app.use(cors());

app.get('/api/crypto', async (req, res) => {
  const resCrypto = await fetch('http://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=1,1027,2010&CMC_PRO_API_KEY=' + process.env.API);

  const dataCrypto = await resCrypto.json();

  res.json(dataCrypto);
});

app.listen(process.env.PORT, () => {
  console.log(`Successfully connected to database. Server is listening on port ${process.env.PORT}.`);
});
