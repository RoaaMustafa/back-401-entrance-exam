'use strict';
const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
require('dotenv').config();
const axios = require('axios'); // require the package
app.use(express.json());
const PORT=process.env.PORT||3002;


const mongoose = require('mongoose');

//mongodb://localhost:27017/test
mongoose.connect(process.env.MONGO_ID, {useNewUrlParser: true, useUnifiedTopology: true});

const testSchema = new mongoose.Schema({
    strDrink: String,
    strInstructions:String,
    strDrinkThumb:String,
  });

const randomModal = mongoose.model('Random', testSchema);

app.get('/',(req,res)=>{
    res.send('Welcome');

})

const allDataHandler=async(req,res)=>{
const url=('https://www.thecocktaildb.com/api/json/v1/1/random.php')
await axios.get(url)
.then((result)=>{
    res.send(result.data)
})
}
const addFavHandler =(req,res)=>{
    const {strDrink,strInstructions,strDrinkThumb}=req.body;
    randomModal.findOne({strDrink:strDrink},(err,result)=>{
        if(result !==null){
            res.send('Already Have')
        }else{
         const newRandom =new randomModal({
            strDrink:strDrink,
            strInstructions:strInstructions,
            strDrinkThumb:strDrinkThumb,
         })
         result.save()
        }
    })
}
const getFavHandler=(req,res)=>{
    randomModal.find({},(err,result)=>{
        res.send(result)
    })
}

const deleteFavhandler=(req,res)=>{
    const id=req.quer.id;
    randomModal.deleteOne({_id:id},(err,result)=>{
        randomModal.find({},(err,result)=>{
            res.send(result)
        })
    })

}

const updateFavHandler=(req,res)=>{
    const {strDrink,strInstructions,strDrinkThumb,id}=req.body;
    randomModal.find({_id:id},(err,result)=>{
        result[0].strDrink=strDrink,
        result[0].strInstructions=strInstructions,
        result[0].strDrinkThumb=strDrinkThumb,
        result[0].save()
        .then(()=>{
            randomModal.find({},(err,result)=>{
                res.send(result)
            })   
        })
    })

}


app.get('/allData',allDataHandler);
app.post('/addFav',addFavHandler);
app.get('/getFav',getFavHandler);
app.delete('/deleteFav',deleteFavhandler);
app.put('/updateFav',updateFavHandler);




app.listen(PORT||3002,()=>{
    console.log(`listenning on port${PORT}`);
})