import express from "express";
import mongoose  from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import  "dotenv/config";
import bodyParser from "body-parser";

const app = express();

// Koneksi MongoDB
mongoose.connect(process.env.CONNECTION);;
const db = mongoose.connection;
db.on('error',(error) => console.error(error));
db.once('open',()=>console.log('Database Connected...'));

// Config express   
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(UserRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
