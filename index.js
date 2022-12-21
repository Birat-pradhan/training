const express = require('express');
const app =express();
const bodyParser =require('body-parser');
let user =[];
app.use(bodyParser.json());

app.get('/user',(req,res)=>{
    res.json(user);
})

app.post('/user',(req,res)=>{
    user.push(req.body);
    res.json(req.body);
})
app.delete('/user',(req,res)=>{
            id = req.query.id;
            user = user.filter(u => u.id != id);
            res.json("Deleted");
})

app.all('*',(req,res)=>{
    res.json('404');
})


app.listen(3000);

