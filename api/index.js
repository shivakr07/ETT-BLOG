import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cors from 'cors'

dotenv.config()

const PORT = 3000;
const app = express()
app.use(express.json())

app.use(cors())

mongoose
.connect(process.env.MONGO_URI)
.then( () => {
    app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT} `)
    })
    console.log("Connected to DB");
}).catch( (error) => {
    console.log("some error while connecting to the db", error);
})

app.use('/api/user/', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statuscode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success : false,
        statusCode,
        message,
    });
});