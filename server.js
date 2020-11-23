'use strict';
const express = require('express');
const app = express();
app.use(express.static('./docs'));
// app.use(express.static('./second'));
app.listen(80, ()=> {
  console.log('Demo Server starting');
});