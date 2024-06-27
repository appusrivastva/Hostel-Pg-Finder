import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import common_route from './routes/common_routes.js';
import admin_route from './routes/admin_routes.js';
import connect_db from './database/db.js';
import owner_route from './routes/owner_routes.js';
import user_route from './routes/user_routes.js';





// express object
const serverApp=express();

// using cors
dotenv.config();
serverApp.use(cors());


serverApp.use(express.json());
serverApp.use(express.urlencoded())
serverApp.use(express.static("public"))  
//  public folder->content->static




// creating endpoint
// configuring env file wid server

// serverApp.get("/",(request,response)=>{
//     response.send("<h1>server side<h1/>")
// });

 serverApp.use("/",common_route)
 serverApp.use("/admin",admin_route)
 serverApp.use("/owner",owner_route)
 serverApp.use("/user",user_route)


// database connect 
 connect_db()
// const port=3200
const port=process.env.PORT|| 3200
// listen server on this port
serverApp.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})




