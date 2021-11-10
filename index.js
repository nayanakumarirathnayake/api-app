const express = require('express');
const app = express()
const mongoose = require('mongoose')


mongoose.connect(
    'mongodb+srv://nayana:freewifi@cluster0.ofyhf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    // 'mongodb+srv://nayana:freewifi@cluster0.ofyhf.mongodb.net/jobak?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
    }
)
.then(()=>console.log('db connected'))
.catch((err)=> {
    console.log(err);
})


app.use(express.json())
app.use('/api', require('./routes/school'))
app.use('/api', require('./routes/student'))

app.get('/api', (req, res) => {
    res.send('hello')
})

app.get('/api/machan', (req,res) => {
    res.send('hello machan ')
})

app.listen(3000, () => {
    console.log('conected');
})