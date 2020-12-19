const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
router.use(express.json()); 

const districtData = require('../models/district')

router.post("/", (req, res, next) => {
                  const user = new districtData({
                    _id: new mongoose.Types.ObjectId(),
                    district:req.body.district
                  })
                  user.save()
                  .then(result => {
                      res.status(201).json({
                          message:'District Entered'
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
    districtData.find({})
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