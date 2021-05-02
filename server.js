const express =require('express');
const app=express();

const ejs=require('ejs');
const expressLayout=require('express-ejs-layouts');
const path=require('path');

const PORT=process.env.PORT || 3000;

//Assets
app.use(express.static('public'));

//set Template engine 
app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine','ejs');


//App Routes
app.get('/',(req,resp)=>resp.render('home'));
app.get('/cart',(req,resp)=>resp.render('customers/cart'));
app.get('/login',(req,resp)=>resp.render('auth/login'));
app.get('/register',(req,resp)=>resp.render('auth/register'));




app.listen(PORT, ()=> console.log(`Listening on kalpitzz port ${PORT}`));

