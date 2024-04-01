const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.static(__dirname))

app.get('/',(req,res)=>{
    res.send("Hello this is an app");
});

app.listen(PORT);