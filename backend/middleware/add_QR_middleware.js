import exp from 'constants'
import multer from 'multer'

import path from 'path'


const storage=multer.diskStorage({
    destination:'./public/All_QR_CODE',
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload_QR=multer({
    storage:storage
}).single("qrcode")

export default upload_QR;
