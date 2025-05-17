import { Schema, model } from 'mongoose';

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            maxLength: [100, 'Title cannot exceed 100 characters']
        },
        content: {
            type: String,
            required: [true, 'Content is required']
        },
        course: {
            type: String,
            required: [true, 'Course is requierd']
        },
        date: { 
            type: Date, 
            required: [true, 'Activity publication date is required']
        },
        link: {
            type: String,
            required: [true, 'Repository link is required']
        }
    }
);

export default model('Post', postSchema);
