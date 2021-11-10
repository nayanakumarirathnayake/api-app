const express = require('express')
const router = express()
const Student = require('../models/Student')



router.get('/student', async (req,res) => {

   try {
    let data =  await Student.find();
    res.status(200).json({
        data: data 
    })
   } catch (error) {
       res.status(400).json({
           message: error
       })
   }


    // res.send('hello get school')
    console.log('student get routed');
})

router.post('/student', async(req,res) => {

   let school = new Student(req.body)
    try {

        let data=  await school.save();
        res.send(data);
        
    } catch (error) {
        res.status(500).send(error)
        console.log(error);
    }
    console.log(req.body);
    console.log('post studnet');
    // res.send(school)
})

module.exports = router;