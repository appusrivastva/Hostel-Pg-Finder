import exp from 'constants'
import multer from 'multer'

import path from 'path'


const storage=multer.diskStorage({
    destination:'./public/addPg',
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const load_img=multer({
    storage:storage
}).single("pic")

export default load_img;
