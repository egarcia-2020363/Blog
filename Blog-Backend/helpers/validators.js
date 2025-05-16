//Validar campos en las rutas
import {body} from 'express-validator'; //Captura todo el body de la solicitud
import {validateError} from './validate.error.js'

export const commentValidator = [
  body('author', 'Author name is required').notEmpty(),
  body('content', 'Content is required').notEmpty(),
  body('postId', 'Post ID is required').notEmpty().isMongoId(),
  validateError
];