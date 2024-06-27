import express  from "express";
import { home, searchHostel } from "../controllers/common_controller.js";

import {addContact} from  "../controllers/common_controller.js"
const common_route=express.Router()
common_route.get('/',home)

common_route.post('/addContact',addContact)
 

common_route.get('/searchHostel',searchHostel);


export default common_route