import { Schema, model } from 'mongoose';

const Comment = new Schema({
    author: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, 
{
    versionKey: false,
    timestamps: true
});

export default model('Comment', Comment);