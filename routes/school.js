const express = require('express')
const router = express()
const School = require('../models/School')



router.get('/school', async (req,res) => {

   try {
    let data =  await School.find();
    res.status(200).json({
        data: data 
    })
   } catch (error) {
       res.status(400).json({
           message: error
       })
   }


    // res.send('hello get school')
    console.log('school get routed');
})

router.post('/school', async(req,res) => {

   let school = new School(req.body)
    try {

        let data=  await school.save();
        res.send(data);
        
    } catch (error) {
        res.status(500).send(error)
        console.log(error);
    }
    console.log(req.body);
    // res.send(school)
})

module.exports = router;