const mongoose = require('mongoose');
const URL ='mongodb+srv://Dhruv:dhruv8287356826@cluster0.06wn87f.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(URL,{maxPoolSize:5},(err)=>{
    if(err){
        console.log('DB Error ', err);
    }
    else{
        console.log('DB Connection Created...');
    }
});
module.exports = mongoose;