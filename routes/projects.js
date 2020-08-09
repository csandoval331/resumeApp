var express = require('express');
var router = express.Router();

var project =[  {img:"empty.jpg",name:"temp1",description:"tempA"},
                {img:"empty.jpg",name:"temp2",description:"tempB"},
                {img:"empty.jpg",name:"temp3",description:"tempC"},
                {img:"empty.jpg",name:"temp4",description:"tempD"},
                {img:"empty.jpg",name:"temp5",description:"tempE"},
                {img:"empty.jpg",name:"temp6",description:"tempF"}]

router.get('/',(req,res)=>{
    res.render('projects',{project} );
})

module.exports = router;