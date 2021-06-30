const mongoose=require("mongoose");
const bcrypt = require("bcryptjs");
console.log("register js file running");
const register_schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },

    email:{
        type:String,
        required:true,
         unique:true

    },
        
    mobile:{
         type:Number,
         required:true,
         unique:true
     },

     password:{
         type:String,
         required:true
         
     }

    //  confirm:{
    //     type:String,
    //     required:true
    //  }

})

// register_schema.pre("save", async function(next){
//     console.log(`your original password is ${this.password}`)
//     this.password = await bcrypt.hash(this.password, 10);
//     console.log(`the password after bcrypt is ${this.password}`)
//     next();
// })


// now we need to create Collections eg models
  const Register= new mongoose.model("blog",register_schema);

  module.exports=Register;