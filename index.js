const express=require('express');
const mongoose=require('mongoose');
const user=require('./router/User');
const app=express();
app.use(express.json());

//Connection cretion and DataBase Creation 
mongoose.connect('mongodb://localhost:27017/UserDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true})
    .then(()=>console.log('Connection is established'))
    .catch(err=>console.log(err));

app.use('/api/Users',user);


//Server creation
const port=process.env.PORT || 3000
app.listen(port,()=>console.log("Server is now working on "+port));