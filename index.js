import express from "express";
import mongoose  from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/crud");;

const db = mongoose.connection;
db.on('error',(error) => console.error(error));
db.once('open',()=>console.log('Database Connected...'));


app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log("Server is running on http://localhost:5000"));
