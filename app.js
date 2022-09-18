const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose');
const app = express();
const blogRoutes = require('./routes/blogRoutes')

const dbURI =  'mongodb+srv://samadqureshi:Samadqureshi123@cluster0.v1ttggb.mongodb.net/node-practice?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then(()=>app.listen(3000))
.catch((err)=>console.log(err))

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
res.redirect('/blogs')
});

app.get('/about',(req,res)=>{
    res.render('About.ejs',{title:'About'})
});


app.use('/blogs',blogRoutes)

app.use((req,res)=>{
res.render('404.ejs',{title:'404'})
});
