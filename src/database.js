import mongoose from "mongoose";


//localhost: 127.0.0.1 

// const url = 'mongodb://localhost:27017/cafe-branch';
const url = 'mongodb+srv://nunicho:qweasdzxc@cluster0.b8sgvyv.mongodb.net/cafe-branch';

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('BD conectada')
})