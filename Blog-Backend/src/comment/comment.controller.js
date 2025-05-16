import Comment from './comment.model.js';

export const addComment = async (req, res) => {
  const { author, content } = req.body;
  const { postId } = req.params;
  const comment = new Comment({ 
        author, 
        content, 
        postId 
    });
  await comment.save();
  res.status(201).send({ 
        success: true, 
        message: 'Comment added succesfully',
        comment 
    });
}

export const getCommentsByPost = async (req, res) => {
  const comments = await Comment.find({ postId: req.params.postId }).sort({ date: -1 });
  res.send(
        { 
            success: true, 
            comments 
        }
    );
}
