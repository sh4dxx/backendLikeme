import { getPostsModel, createPostModel, findPostByIdModel, updateLikePostModel, updatePostModel, deletePostModel } from '../models/postModel.js'

export const getAllController = async (req, res) => {
  try {
    const posts = await getPostsModel()
    if (posts.length === 0) {
      res.status(200).json([])
    } else {
      res.status(200).json(posts)
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createPostController = async (req, res) => {
  try {
    const { titulo, img, descripcion, likes } = req.body
    const newPost = await createPostModel(titulo, img, descripcion, likes)
    res.status(201).json(newPost)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const findPostByIdController = async (req, res) => {
  try {
    const id = req.params.id
    const post = await findPostByIdModel(id)
    if (!post) {
      return res.status(404).json({ error: 'no se encontro registro' })
    }
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updatePostByIdController = async (req, res) => {
  try {
    const id = req.params.id
    const post = req.body
    const updated = await updatePostModel(id, post)
    res.status(200).json(updated)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateLikePostByIdController = async (req, res) => {
  try {
    const id = req.params.id
    console.log(req.body) // {} En frontend del desafio 2, no se envia el body
    const post = await findPostByIdModel(id)
    if (!post) {
      return res.status(404).json({ error: 'no se encontro registro' })
    }
    const newLikes = (post.likes == null ? 0 : post.likes) + 1
    const updated = await updateLikePostModel(newLikes, id)
    res.status(200).json(updated)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deletePostController = async (req, res) => {
  try {
    const id = req.params.id
    const result = await deletePostModel(id)
    if (result === 0) {
      return res.status(404).json({ error: 'no se encontro registro' })
    }
    res.status(200).json({ result })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
