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


// password-yO7lOmaRAIcRyXqH
//username-ajikyasharma24

require('./models/user')
require('./models/post')


app.use(cors())
app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/post'))



app.listen(PORT, ()=>{
    console.log(`Server is Running at ${PORT}`)
})