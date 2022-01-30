const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: true,
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// .env 파일을 생성하고 
// uri = 몽고DB Atlas -> connection -> 두번째 app application 주소 복붙

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


const usersRouter = require('./routes/users');
const { application } = require('express');

app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});