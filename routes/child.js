const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json()); 

const childData = require('../models/child')

router.post("/", (req, res, next) => {
                  const user = new childData({
                    _id: new mongoose.Types.ObjectId(),
                    name:req.body.name,
                    sex:req.body.sex,
                    DOB: req.body.name,
                    father_name: req.body.father_name,
                    mother_name: req.body.mother_name,
                    state:req.body.state,
                    district:req.body.district

                  })
                  user.save()
                  .then(result => {
                      res.status(201).json({
                          message:'Child Created'
                      })
                  }).catch(err => {
                      console.log(err)
                      res.status(500).json({
                          error:err
                      })
                  })
              }
)

router.get("/", (req, res, next) => {
    childData.find({})
    .exec()
    .then(user => {
       res.status(200).json({
           user
       })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    
})

module.exports = router;