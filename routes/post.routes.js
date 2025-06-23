import { Router } from 'express'
import { getAllController, createPostController, findPostByIdController, updatePostByIdController, updateLikePostByIdController, deletePostController } from '../src/controllers/postController.js'
const router = Router()

router.get('', getAllController)
router.post('', createPostController)
router.get('/:id', findPostByIdController)
router.delete('/:id', deletePostController)
router.put('/:id', updatePostByIdController)
router.put('/like/:id', updateLikePostByIdController)

export default router
