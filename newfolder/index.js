const express=require('express');
const path=require('path');
const port=8080;
const app=express();
const db=require('./config/db');
const Contact=require('./models/contact');
const contactRouter=require('./routes/contact');
 app.set('view engine','ejs');
 app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use('/',contactRouter);

app.listen(port,function(err){
    if(err){
        console.log('Error is running on server');
    }
    console.log(`server is running on port: ${port}`);
})