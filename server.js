require('dotenv').config();
const express =require('express');
const app=express();
const ejs=require('ejs');
const expressLayout=require('express-ejs-layouts');
const path=require('path');
const PORT=process.env.PORT || 3000;
const mongoose =require('mongoose');
const session=require('express-session');
const flash=require('express-flash');
const MongoStore = require ('connect-mongo'); //for session store in db


//Database connection to MongoDb
const url='mongodb://localhost/ToscanoPizza';
mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true});
const connection=mongoose.connection;
connection.once('open',()=>{console.log('Database Connected..');}).catch(err=>{console.log('Connection Failed..')});


//express-session config

app.use(session({
    secret:process.env.COOKIE_SECRET,
    resave:false,
    store:  MongoStore.create({mongoUrl:url}),
    saveUninitialized:false,
    cookie:{maxAge:1000*60*60*24} //24hours
    
}));
app.use(flash());

//Assets
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//global middleware
app.use((req,resp,next)=>{
    resp.locals.session=req.session;
    next();
})

//set Template engine 
app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine','ejs');

require('./routes/web')(app);



app.listen(PORT, ()=> console.log(`Listening on kalpitzz port ${PORT}`));

 