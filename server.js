'use strict';
const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
require('dotenv').config();
const axios = require('axios'); // require the package
app.use(express.json());
const PORT=process.env.PORT||3002;










app.listen(PORT||3002,()=>{
    console.log(`listenning on port${PORT}`);
})