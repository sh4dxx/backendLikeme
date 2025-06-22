import { getPostsModel, createPostModel, findPostByIdModel, updatePostModel, deletePostModel } from '../models/postModel.js'

export const getAllController = async (req, res) => {
  try {
    const posts = await getPostsModel()
    if (posts.length === 0) {
      res.status(200).json([])
    } else {
      res.status(200).json(posts)
    }
  } catch (error) {
    res.status(500).json({ error: '[getAll] => Error al procesar la solicitud' })
  }
}

export const createPostController = async (req, res) => {
  try {
    const { titulo, img, descripcion, likes } = req.body
    const newPost = await createPostModel(titulo, img, descripcion, likes)
    res.status(201).json(newPost)
  } catch (error) {
    res.status(500).json({ error: '[create] => Error al procesar la solicitud' })
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
    res.status(500).json({ error: '[find] => Error al procesar la solicitud' })
  }
}

export const updatePostByIdController = async (req, res) => {
  try {
    const id = req.params.id
    const post = await findPostByIdModel(id)
    if (!post) {
      return res.status(404).json({ error: 'no se encontro registro' })
    }
    const newLikes = (post.likes == null ? 0 : post.likes) + 1
    const updated = await updatePostModel(newLikes, id)
    res.status(200).json(updated)
  } catch (error) {
    res.status(500).json({ error: '[updated] => Error al procesar la solicitud' })
  }
}

export const deletePostController = async (req, res) => {
  try {
    const id = req.params.id
    const result = await deletePostModel(id)
    if (!result) {
      return res.status(404).json({ error: 'no se encontro registro' })
    }
    res.status(200).json({ result })
  } catch (error) {
    res.status(500).json({ error: '[delete] => Error al procesar la solicitud' })
  }
}
