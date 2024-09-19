const express = require('express')
const studentcontroller = require('../controllers/studentcontroller');
const router = express.Router();
  

router.post('/add/user',(req,res)=>{
     studentcontroler.addStudent(req,res);
})
router.get('/users',(req,res)=>{
    studentcontroller.getStudents(req,res);
})



module.exports = router
