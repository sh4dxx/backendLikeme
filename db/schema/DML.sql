select * from posts

INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *

SELECT * FROM posts WHERE id = $1

UPDATE posts SET titulo = $1, img = $2, descripcion = $3, likes = $4 WHERE id = $5 RETURNING *

UPDATE posts SET likes = $1 WHERE id = $2 RETURNING *

DELETE FROM posts WHERE id = $1