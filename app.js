var express= require('express');
var mongoose =require('mongoose');
const bodyParser= require('body-parser');
var {patientModel}= require('./model/patient');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://shaji:ponnu123@cluster1.u2cuq.mongodb.net/coviddb?retryWrites=true&w=majority",{ useUnifiedTopology: true },{ useNewUrlParser: true })

app.post('/add', async(req,res)=>{

    try
    {
      var data = req.body;
      var patientData= new patientModel(data);

      var result = await patientData.save();
      res.json(result);

    }
   catch(error)
   {

   }
})

app.get('/viewall',async(req,res)=>{

      try
    {
       var result = await patientModel.find().exec();
       res.json(result);
    }
       catch(error)
   {
       res.status(500).send(error)
   }
})

 app.post('/search',async(req,res)=>{
   
    try
    {
      patientModel.find(req.body, (error,data)=>{
       if (error){
         throw Error
       }else{
         res.json(data)
       }
      })  
            
        
    }
  catch(error){
     res.status(500).send(error)
  }
 })






app.listen(process.env.PORT || 3000,function(){
    console.log("Your Server is Running")
}

)