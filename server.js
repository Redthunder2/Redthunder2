const express = require('express');
const app = express();

app.use(express.static(__dirname))

app.get('/',(req,res)=>{
    res.send("Hello this is an app");
});

app.listen(1000);