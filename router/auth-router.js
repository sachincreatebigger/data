import express from 'express'
import  {upload,create,user,userdelet} from '../controllers/createpost-controller.js'
let router=express.Router()
router.route('/createpost').post(upload.single('image'),create)
router.route('/createpost').get(user)
router.route('/createpostdelet/:id').delete(userdelet)
export default router
