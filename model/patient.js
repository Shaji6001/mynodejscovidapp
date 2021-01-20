var mongoose = require('mongoose');


var patientSchema = new mongoose.Schema(
    {
        patientName:{type:String},
        patientAddress:{type:String},
        doctorName:{type:String},
        symtoms:{type:String},
        patientPhoneno:{type:Number},
        emailID:{type:String},
        patientCode:{type:String}

    }
);
   var patientModel = mongoose.model("patients", patientSchema);
   
   module.exports ={patientModel}