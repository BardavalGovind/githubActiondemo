const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoute')

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('backend is running')
})

app.use('/api/users', userRoutes);
app.use('/api/getusers', userRoutes);

const PORT = 3000;

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`))

