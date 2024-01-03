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


app.options('*', cors());

app.use(bodyParser.json()); 
app.use((res, req, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE');

    next();
});
app.use(cors());
app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))



app.listen(PORT, ()=>{
    console.log(`Server is Running at ${PORT}`)
})
