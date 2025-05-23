const express= require('express');
const app=express();

app.get('/',(req,res)=>{
    res.status(200).json({
        'success':true,
        'message':'Welcome to the nodejs on k8s'
    });
});

app.get('/users',(req,res)=>{
    res.status(200).json({
        'success':true,
        'message':'Get Users Success'
    });
});

app.get('/another',(req,res)=>{
    res.status(200).json({
        'success':true,
        'message':'This is running another'
    });
});


app.get('/another-api',(req,res)=>{
    res.status(200).json({
        'success':true,
        'message':'This is running another api'
    });
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});