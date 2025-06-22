import { Router } from 'express'
import { getAllController, createPostController, findPostByIdController, updatePostByIdController, deletePostController } from '../src/controllers/postController.js'
const router = Router()

router.get('', getAllController)
router.post('', createPostController)

router.get('/:id', findPostByIdController)
router.delete('/:id', deletePostController)
router.put('/like/:id', updatePostByIdController)

export default router
