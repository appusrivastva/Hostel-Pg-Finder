import exp from 'constants'
import multer from 'multer'

import path from 'path'


const storage=multer.diskStorage({
    destination:'./public/All_pgpayment_pic',
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const pgpayment_img=multer({
    storage:storage
}).single("payment_pic")

export default pgpayment_img;
