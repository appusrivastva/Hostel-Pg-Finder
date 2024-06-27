import express  from "express";
import { allfeedback, home,login,allcontact, alluser, allhostelowner,allpgowner} from "../controllers/admin_controller.js";
const admin_route=express.Router()
admin_route.get('/',home)
admin_route.post('/login',login)


admin_route.get('/allfeedback',allfeedback)

admin_route.get('/allcontact',allcontact)
admin_route.get('/alluser',alluser)


admin_route.get('/allhostelowner',allhostelowner)
admin_route.get('/allpgowner',allpgowner)
export default admin_route