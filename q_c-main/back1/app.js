import express from "express";
import mongoose from "mongoose";
import contact from "./models/contact.js";
import feedback from "./models/feedback.js";
import user from "./models/user.js";
import login from "./models/login.js";
import bodyParser from "body-parser";
import cors from "cors";

const app=express();
// const cors=
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://posinasivani:Lf5V5J5zctyXXQhT@cluster0.81h0yks.mongodb.net/Clustor0?retryWrites=true&w=majority")
.then(()=>app.listen(5000))
.then(()=>
console.log("Connected to database&listening to local host 5000"))
.catch((err) => console.log(err));


// app.post('/addcontact',(req,res,next)=>{
//     console.log(req.body)
//      res.send("success")
//     const {name,email,number} = req.body;
//     const stud = new contact({
//         name,
//         email,
//         number
//     })
//     try{
//         stud.save()
//     }
//     catch(error){
//         console.log(err);
//     }
//     stud.save()
//     return res.send({message:"inserted",result:stud})
// })
app.post('/addcontact', async (req, res, next) => {
    console.log(req.body.formdata);
    const { name, email, number } = req.body.formdata; // Access data from the request body

    const stud = new contact({
      name,
      email,
      number,
    });
    try{
    await stud.save();

    res.status(200).send({ message: "inserted", result: stud });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error inserting data" });
  }
});
app.post('/addfeedback', async (req, res, next) => {
    console.log(req.body.formdata);
    const { name, foodItem, specialRequest } = req.body.formdata; // Access data from the request body

    const stud = new feedback({
      name,
      foodItem,
      specialRequest,
    });
    try{
    await stud.save();

    res.status(200).send({ message: "inserted", result: stud });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error inserting data" });
  }
});
app.post('/addlogin', async (req, res, next) => {

  //console.log(req.body.loginform)
  const{username,password}=req.body.loginform
  const user=new login({
     username,
     password
      
  })
  user.save();
  return res.status(200).json(user)
})
// app.post('/adduser', (req, res, next) => {
//   console.log(req.body.registerforms);
//   const { username, email, password } = req.body.registerforms;
//   const use = new user({ // Change this line to use the user model
//     username,
//     email,
//     password
//   });

//   use.save()
//     .then(() => {
//       res.status(200).send({ message: "User inserted successfully", result: use });
//     })
//     .catch((error) => {
//       console.error('Error inserting user:', error);
//       res.status(500).send({ message: "Error inserting user", error });
//     });
// });
// app.post('/adduser', (req, res, next) => {
//   console.log(req.body.registerforms);
//   const { username, email, password, location } = req.body.registerforms;
//   const use = new user({
//     username,
//     email,
//     password,
//     location // Include the location field
//   });

//   use.save()
//     .then(() => {
//       res.status(200).send({ message: "User inserted successfully", result: use });
//     })
//     .catch((error) => {
//       console.error('Error inserting user:', error);
//       res.status(500).send({ message: "Error inserting user", error });
//     });
// });

app.post('/adduser', async (req, res, next) => {
  try {
    const { username, email, password, location } = req.body.registerforms;

    const use = new user({
      username,
      email,
      password,
      location,
    });

    console.log('Before user.save()');
    await use.save();
    res.status(200).send({ message: "User inserted successfully", result: use });
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).send({ message: "Error inserting user", error });
  }
});

// app.post('/adduser', (req, res, next) => {
//   console.log(req.body.registerforms);
//   const { username, email, password } = req.body.registerforms;
//   const use = new login({
//     username,
//     email,
//     password
//   });

//   use.save()
//     .then(() => {
//       res.status(200).send({ message: "User inserted successfully", result: use });
//     })
//     .catch((error) => {
//       console.error('Error inserting user:', error);
//       res.status(500).send({ message: "Error inserting user", error });
//     });
// });

// app.post('/adduser',(req,res,next)=>{
    
//   console.log(req.body.registerforms)
//   const{username,email,password}=req.body.registerforms
//   const use=new login({
//       username,
//       email,
//       password
      
//   })
//   // stud.save()//for saving data into database

  
//       use.save();
// })
app.post('/checkUser', async (req, res) => {
  const { email, username } = req.body.registerforms;

  try {
    // Check if a user with the same email or username already exists
    const existingUser = await login.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      // User with the same email or username already exists
      res.json({ exists: true });
    } else {
      // User doesn't exist
      res.json({ exists: false });
    }
  } catch (error) {
    // Handle database query error
    console.error('Database query error:', error);
    res.status(500).json({ exists: false, error: 'Database error' });
  }
});

// app.post('/checkUser', async (req, res) => {
//   const { email, username ,password} = req.body;

//   try {
//     // Check if a user with the same email or username already exists
//     const existingUser = await login.findOne({ $or: [{ email }, { username }, { password }] });

//     if (existingUser) {
//       // User with the same email or username already exists
//       res.json({ exists: true });
//     } else {
//       // User doesn't exist
//       res.json({ exists: false });
//     }
//   } catch (error) {
//     // Handle database query error
//     console.error('Database query error:', error);
//     res.status(500).json({ exists: false, error: 'Database error' });
//   }
// });

// app.post('/addlogin', async (req, res, next) => {
//   console.log(req.body.formdata);
//   const { username, password } = req.body.formdata; // Access data from the request body

//   const stud = new login({
//     username,
//     password,
//   });
//   try{
//   await stud.save();

//   res.status(200).send({ message: "Successfully Login", result: stud });
// } catch (error) {
//   console.log(error);
//   res.status(500).send({ message: "Error inserting data" });
// }
// });

  
 
// app.listen(4444)
//backend/api
//localhost:4444/api