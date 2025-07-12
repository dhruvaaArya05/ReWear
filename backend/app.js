const http = require('http');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const authRouter = require('./routers/authRouter');
const itemRouter = require('./routers/itemRouter');

const app = express();

const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(session({
  secret: "mysecretwillalwaysremainsecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  }
}));

app.use(cors({
  credentials: true,
  origin: "http://localhost:5173"
}));

app.use(authRouter);
app.use(itemRouter);

const PORT = 3000;
const DB_PATH = "mongodb+srv://dhruvaa866:dhruvaadbroot%4005@completecoding.z7yhero.mongodb.net/rewear?retryWrites=true&w=majority&appName=CompleteCoding";

mongoose.connect(DB_PATH).then(() => {
  console.log('Connected to MongoDB');
  server.listen(PORT, () => {
    console.log(`server is running on address http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
})