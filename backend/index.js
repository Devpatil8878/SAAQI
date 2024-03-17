const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const cors = require('cors');
const Post = require("./models/post.model")
const User = require("./models/user.model")

const session = require("express-session")
const cookieParse = require("cookie-parser");
const multer = require("multer");
const upload = multer()


const app = express();
app.use(express.json());
app.use(cors()); 
app.use(session({secret: "ruh jism se ho gayi fanah"}))

mongoose.connect('mongodb://localhost:27017/saaqi', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});




app.get("/", (req, res)=>{
    res.send("User")
})

app.post('/register', async (req, res) => {
    try {
      const { username, email, password, confirmpassword } = req.body;
  
      // Check if the username or email already exists
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return res.status(409).json({ message: 'Username or email already exists' });
      }
  
      // Create a new user
      const newUser = new User({ username, email, password, confirmpassword });
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email, password });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // You might want to generate and send a token for authentication
      res.send();
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


  app.post('/post', async (req, res) => {
    try {
      const { content } = req.body;
  
      // Create a new post
      const newPost = new Post({ content });
      await newPost.save(); 
  
      res.status(201).json({ message: 'Post submitted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });



app.listen(3001, ()=>{
    console.log(`Server started listening on http://localhost:${3001}`)
})