import Post from './post.model.js';

export const addPost = async (req, res) => {
  try {
    const { title, content, course, date } = req.body;

    const newPost = new Post({
      title,
      content,
      course,
      date
    });

    await newPost.save();

    res.status(201).send({ success: true, message: 'Publicación creada exitosamente', post: newPost });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Error al crear la publicación', error });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.status(200).send({ success: true, posts });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Error al obtener publicaciones', error });
  }
};

export const getPostsByCourse = async (req, res) => {
  try {
    const { course } = req.params;
    const posts = await Post.find({ course }).sort({ date: -1 });

    res.status(200).send({ success: true, posts });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Error al obtener publicaciones por curso', error });
  }
};

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).send({ success: false, message: 'Publicación no encontrada' });
    }

    res.status(200).send({ success: true, post });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Error al obtener la publicación', error });
  }
};
