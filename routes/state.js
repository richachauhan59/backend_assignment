const express = require("express")
const router = express.Router()
router.use(express.json());
const mongoose = require("mongoose")

const stateData = require('../models/state')

router.post("/", (req, res, next) => {
                  const user = new stateData({
                    _id: new mongoose.Types.ObjectId(),
                    state:req.body.state
                  })
                  user.save()
                  .then(result => {
                      res.status(201).json({
                          message:'State Entered'
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
    stateData.find({})
    .exec()
    .then(state => {
       res.status(200).json({
         state
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