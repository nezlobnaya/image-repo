import { Schema, Model  } from "mongoose";

const imageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    selectedFiles: {
        type: [String],
        required: true
    },
    tags: {
        type: [String],
        required: false
    },
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
});

const Image = new Model("Image", imageSchema);

export default Image;


