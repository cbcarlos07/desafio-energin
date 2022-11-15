const multer = require('multer')
const shortId = require('shortid')
const path = require('path')
const public = path.resolve('public')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, public)
    },
    filename: (req, file, cb)=>{
        const dot = file.originalname.lastIndexOf('.')
        const ext = file.originalname.substring( dot, file.originalname.length )
        const uniqueSuffix = shortId.generate()
        cb(null, `${uniqueSuffix}${ext}`)
    }
})

const upload = multer({storage})

module.exports = upload