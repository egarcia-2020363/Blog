import {Router} from 'express';
import { addPost, getAllPosts, getPostsByCourse, getPost } from '../post/post.controller.js';

const api = Router();

//Ruta pública
api.get('/getAllPosts', getAllPosts)
api.get('/getPost/:id', getPost)
api.get('/getPostByCourse/', getPostsByCourse)
api.post('/addPost', addPost);

export default api;