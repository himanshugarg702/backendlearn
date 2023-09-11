const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://hg631124:123456%40Hgarg@cluster0.pegalar.mongodb.net/contactlist')

const db=mongoose.connection;

db.on('error',(error)=>{
    console.error('error to connecting with database',error)});

db.once('open',()=>{
     console.log('successfully connected to the database');
})