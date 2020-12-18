const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userRoutes = require("./routes/user")

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

// app.use('/api', apiRoutes);
app.use("/user" , userRoutes)

app.listen(5000, () => {
    console.log('Server live on port 5000');
});