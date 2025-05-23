//Validar campos en las rutas
import {body, param} from 'express-validator'; //Captura todo el body de la solicitud
import {validateError} from './validate.error.js'

export const commentValidator = [
  body('author', 'Author name is required').notEmpty(),
  body('content', 'Content is required').notEmpty(),
  param('postId', 'Post ID is required').notEmpty().isMongoId(),
  validateError
];