const express=require('express');
const port=8000;
const app=express();
const userRouters=require('./router/users')
app.use('/',userRouters);

app.listen(port,function(err){
    if(err){
        console.log('Error is running on server');
    }
    console.log(`server is running on port: ${port}`);
})