import pool from '../../db/config.js'

export const getPostsModel = async () => {
  const query = 'SELECT * FROM posts'
  const response = await pool.query(query)
  return response.rows
}

export const createPostModel = async (titulo, img, descripcion, likes) => {
  const sqlQuery = {
    text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *',
    values: [titulo, img, descripcion, likes]
  }
  const { rows } = await pool.query(sqlQuery)
  return rows[0]
}

export const findPostByIdModel = async (id) => {
  const sqlQuery = {
    text: 'SELECT * FROM posts WHERE id = $1',
    values: [id]
  }
  const { rows } = await pool.query(sqlQuery)
  return rows[0]
}

export const updatePostModel = async (id, { titulo, img, descripcion, likes }) => {
  const sqlQuery = {
    text: 'UPDATE posts SET titulo = $1, img = $2, descripcion = $3, likes = $4 WHERE id = $5 RETURNING *',
    values: [titulo, img, descripcion, likes, id]
  }
  const result = await pool.query(sqlQuery)
  return result.rows
}

export const updateLikePostModel = async (likes, id) => {
  const sqlQuery = {
    text: 'UPDATE posts SET likes = $1 WHERE id = $2 RETURNING *',
    values: [likes, id]
  }
  const result = await pool.query(sqlQuery)
  return result.rows
}

export const deletePostModel = async (id) => {
  await pool.query('DELETE FROM posts WHERE id = $1', [id])
}
