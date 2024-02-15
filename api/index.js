import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()

const PORT = 3000;
const app = express()
app.use(express.json())

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