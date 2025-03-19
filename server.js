const express=require('express');
const cors=require('cors');
const connectDB = require('./config/db');
const router = require('./routes/authRoutes');
const cartrouter = require('./routes/cartRoutes');

const app=express();

const allowedOrigins=[ecom-frontend-iwfpsuf9k-shaik-sahira-zuhi-s-projects.vercel.app,ecom-frontend-beige.vercel.app]

app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allows cookies and authentication headers if needed
  }))
app.use(express.json())


connectDB()
app.use("/auth",router)
app.use("/cart",cartrouter)

app.get('/',(req,res)=>{
    res.send('Hello,World!')
})
const port=5000
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

