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


app.use(cors())
// app.use(cors(
//     {
//         origin: {"https://pixpulse-delta.vercel.app"},
//         method: {"POST", "GET", "PUT"},
//         credentials: true

//     }
// ));
// app.use((req, res, next) => {
//       res.setHeader("Access-Control-Allow-Origin", "*");
//       res.setHeader(
//         "Access-Control-Allow-Methods",
//         "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//       );
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
      if (req.method === "OPTIONS") {
        return res.sendStatus(200);
      }
      next();
    });
app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))



app.listen(PORT, ()=>{
    console.log(`Server is Running at ${PORT}`)
})
