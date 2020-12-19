const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userRoutes = require("./routes/user")
const childRoutes = require("./routes/child")
const districtRoutes = require("./routes/district")
const stateRoutes = require("./routes/state")

dotenv.config();

const app = express();

app.use(cors());

mongoose.connect(
    process.env.ATLAS_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Connected to database');
        }
    }
);

app.use("/user" , userRoutes)
app.use("/child" , childRoutes)
app.use("/district" , districtRoutes)
app.use("/state" , stateRoutes)

app.listen(5000, () => {
    console.log('Server live on port 5000');
});