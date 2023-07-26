const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

//FOR LOCAL SERVER
//const uri = "mongodb://127.0.0.1:27017/Exams23002";

//FOR MONGODB ATLAS
//const uri = "mongodb+srv://serhat:ss123456@cluster0.2ikdvro.mongodb.net/Exams23002";

const uri = "mongodb://127.0.0.1:27017/Exams23002";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true   }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const quizRouter = require('./routes/routes');
app.use('/', quizRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
