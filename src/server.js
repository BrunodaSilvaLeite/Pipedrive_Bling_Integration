require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('./database');

const app = express();

app.use(express.json());
app.use(cors())
app.use(routes);

app.use((err, response)=>{
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        })
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(process.env.PORT, ()=>{console.log(`listening on ${process.env.PORT}`);});

