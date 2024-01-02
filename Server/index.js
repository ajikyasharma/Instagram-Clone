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



app.use(cors(
    {
        // origin: {"https://pixpulse-delta.vercel.app"},
        // method: {"POST", "GET", "PUT"},
        // credentials: true
        x =>x
                            .AllowAnyMethod()
                    .AllowAnyHeader()
                    .SetIsOriginAllowed(origin => true) // allow any origin
                    .AllowCredentials()); // allow credentials
    }
));
app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))



app.listen(PORT, ()=>{
    console.log(`Server is Running at ${PORT}`)
})
