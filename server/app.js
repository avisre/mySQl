const express=require('express');
const app=express()
const mysql=require('mysql');
const cors=require('cors');
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:'localhost',
    user:'root',

    password:'password',
    database:'employee',
});

app.post('/create',(req,res)=>{
    console.log(req.body);
    const name=req.body.name;
    const age=req.body.age;
    const position=req.body.position;
    db.query('INSERT INTO employees(name, age, position) VALUES(?,?,?)',
    [name, age, position], (err,result)=>{
        if (err){
            console.log(err)
        }else{
            res.send('values inserted')
        }
    })
})


app.listen(3000,()=>{
    console.log("listening")
})