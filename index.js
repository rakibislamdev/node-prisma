const cookieParser = require('cookie-parser');
const express = require('express')

require('dotenv').config();
const app = express();

// Regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie middleware
app.use(cookieParser());

const userRouter = require('./routes/userRoutes');

app.use('/api', userRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(process.env.PORT, () => {
    console.log(`Server started at http://localhost:${process.env.PORT}`);
})