import { Schema, model } from 'mongoose';

const commentSchema = new Schema(
    {
        author: { 
            type: String, 
            required: true ['Author name is required']
        },
        content: { 
            type: String, 
            required: true ['Content is required']
        },
        date: { 
            type: Date, 
            default: Date.now 
        },
        postId: { 
            type: Schema.Types.ObjectId, 
            ref: 'Post', 
            required: true ['Post reference is required']
        }
    }
);

export default model('Comment', commentSchema);