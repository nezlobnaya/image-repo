import mongoose from "mongoose";
import slug from  "mongoose-slug-generator";

const { Schema, model } = mongoose;

mongoose.plugin(slug);

const imageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    creatorId: {
        type: Schema.Types.ObjectId, ref: "User" },

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
    slug: {
        type: String,
        slug: "title",
        unique: true
    }
}, { timestamps: true }, { collection: "images" });


imageSchema.index({
    title: 'text',
    description: 'text',
    tags: 'text',
    });

const Image = new model("images", imageSchema);

export default Image;


