const express = require("express");
const app = express();
const port=process.env.port || 80;
// const bcypt=require("bcryptjs");
const path = require("path");
require("./db-connection/conn");
const Register = require("./db-connection/register");
const { Console } = require("console");

app.set('view engine', 'pug');

app.set('views',path.join(__dirname,'views'));

app.use(express.static('Public'));

app.use(express.urlencoded());

// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+'/login.html'));
//     //__dirname : It will resolve to your project folder.
//   });

app.get("/", (req,res)=>{
  res.render('index.pug');
   
})

app.get("/Register", (req,res)=>{
  res.render('Register.pug');
   
})

app.get("/login", (req,res)=>{
  res.render('index.pug');
   
})

app.post("/Register", async (req,res)=>{
  let name = req.body.name;
  console.log(name);
  console.log(req.body.username);
  console.log(req.body.email);
  console.log(req.body.number);
  console.log(req.body.password);
  console.log(req.body.gender);
  console.log(req.body.confirm);

  try {

    const register_user = new Register({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      mobile: req.body.number,
      password: req.body.password,
  })

  const registered = register_user.save();
  res.status(200).render("welcome-register.pug")

 
  } catch (error) {
    res.status(400).send(error)
  }
  
})
   

app.post("/login", async (req,res)=>{
   const user_name=req.body.username;
   const password=req.body.password;
   const mobile_1 =req.body.mobile;
   const email_1 =req.body.email;
   console.log(password);
   console.log(user_name);
   console.log(mobile_1);
   console.log(email_1);

   
  //  db.blogs.find({$or:[{username:"undefined"},{mobile:288855664},{email:"undefined"}]})
  //  const user_email= await Register.find({$or:[{username:user_name},{email:email_1},{mobile:mobile_1}]});
  const user_email= await Register.findOne({username:user_name});
   console.log(user_email);
      console.log(user_email.password);
   if(user_email.password==password){
     let name=user_email.name;
     const con="Welcome to our site"
     const user_name =user_email.name;
     const param ={'title': 'Welcome', content:con, user:user_name}
     res.render('welcome.pug',param);
   }

   else{
     res.send("Password Mismatch");
   }
   
})

app.listen(port, ()=>{
    console.log(`you are succesfully listening to the port ${port}`);
})
