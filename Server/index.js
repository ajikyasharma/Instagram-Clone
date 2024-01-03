const express= require('express')
const app= express()
const mongoose= require('mongoose')
const cors= require('cors')
const PORT= 3000

const {MONOGOURI} = require('./keys')




mongoose.connect(MONOGOURI)

mongoose.connection.on('connected',()=>{
    console.log("MONOGODB Connected")
})


mongoose.connection.on('error',(err)=>{
    console.log("err Connecting", err)
})




require('./models/user')
require('./models/post')

app.use(cors({
  origin: '*', // Change this to your front-end URL in production for security
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
  credentials: true, // Allow session cookies and other credentials to be sent along with the request
}));

app.use(express.json());

app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))



app.listen(PORT, ()=>{
    console.log(`Server is Running at ${PORT}`)
})
