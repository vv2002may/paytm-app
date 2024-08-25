const express = require('express');
const cors = require('cors');

const { dbConnect } = require('./services/dbConnect');
const { PORT } = require('./config.js/index');
const { router } = require('./router/index');


dbConnect({ dbName: 'paytm' });
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', router);

app.listen(PORT)