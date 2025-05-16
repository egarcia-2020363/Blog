import {Router} from 'express';
import { addComment, getCommentsByPost } from './comment.controller.js';
import { commentValidator } from '../../helpers/validators.js';

const api = Router();

//Rutas privadas
api.post('/add/:postId', [commentValidator], addComment);
api.get('/byPost/:postId', getCommentsByPost);

export default api;