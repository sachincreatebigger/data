//mongodb://localhost:27017
import express from "express"
import path from "path"
import connectiondb from "./config-utils/Dbconnection.js";
import router from "./router/auth-router.js";
import cors from "cors"
import bodyParser from "body-parser";
let app=express()
app.use(cors())
app.use(bodyParser.json())
app.use(router)

app.use('/images', express.static(path.join(path.resolve(), 'public/images')));
app.use(express.urlencoded({ extended: true }));
    connectiondb().then(() =>{

        console.log('connect to database sucessfully') 
    }) 







app.listen(3000,()=>{

    console.log("connect to server sucessfully ")
})