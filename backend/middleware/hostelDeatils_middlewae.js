import exp from 'constants'
import multer from 'multer'

import path from 'path'


const storage=multer.diskStorage({
    destination:'./public/addHostel',
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload_img=multer({
    storage:storage
}).single("pic")

export default upload_img;
