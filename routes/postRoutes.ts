const postRouter=require("express").Router()
const postController=require("../controllers/postController")
postRouter.post("/",postController.createPost)
postRouter.get("/",postController.getAllPost)



module.exports=postRouter
