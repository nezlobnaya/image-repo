import mongoose from 'mongoose';
import Image from '../models/Image.js';


const ObjectId = mongoose.Types.ObjectId;

// Images
export const getImages = async (req, res) => {
    try {
        const images = await Image.find();
        res.status(200).json(images);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getImage = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }
    try {
        const image = await Image.findById(req.params.id);
        if (!image || image.length === 0) {
            return res.status(404).json({ message: 'Image not found' });
        }
        res.status(200).json(image);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

  
export const postImage = async (req, res) => {
    const image = req.body;
    const newImage = new Image(image);
    try {
        const savedImage = await newImage.save();
        res.status(201).json(savedImage);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
   

export const updateImage = async (req, res) => {
    const updatedImage = req.body;
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }
    try {
        const image = await Image.findByIdAndUpdate(req.params.id, updatedImage, { new: true });
        if (!image || image.length === 0) {
            return res.status(404).json({ message: 'Image not found' });
        }
        res.status(200).json(image);

    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

export const deleteImage = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }
    try {
        const image = await Image.findByIdAndDelete(req.params.id);
        if (!image || image.length === 0) {
            return res.status(404).json({ message: 'Image not found' });
        }
        res.json({message: 'Image deleted'});

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


export const deleteAllImages = async (req, res) => {
    try {
        const images = await Image.deleteMany({});

        res.json({
            message: 'All images deleted',
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};


export const getImagesByTag = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }
    const tags = req.body.tags;
    try {
        const images = await Image.find({$text: {$search: tags}});
        if (!images || images.length === 0) {
            return res.status(404).json({ message: 'Images not found' });
        }
        res.status(200).json(images);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

  
export const getImagesByTitle = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }
    const title = req.body.title;
    try {
        const images = await Image.find({$text: {$search: title}});
        if (!images || images.length === 0) {
            return res.status(404).json({ message: 'Images not found' });
        }
        res.status(200).json(images);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getImagesByDescription = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }
    const description = req.body.description;
    try {
        const images = await Image.find({$text: {$search: description }});
        if (!images || images.length === 0) {
            return res.status(404).json({ message: 'Images not found' });
        }
        res.status(200).json(images);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


export const getImagesByDate = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }
    const createdAt = req.body.createdAt;
    try {
        const images = await Image.find({$search: createdAt });
        if (!images || images.length === 0) {
            return res.status(404).json({ message: 'Images not found' });
        }
        res.status(200).json(images);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const likeImage = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }
    try {
        const image = await Image.findById(req.params.id);
        if (!image || image.length === 0) {
            return res.status(404).json({ message: 'Image not found' });
        }
        image.likeCount += 1;
        const updatedImage = await image.save();
        res.status(200).json(updatedImage);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const dislikeImage = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }
    try {
        const image = await Image.findById(req.params.id);
        if (!image || image.length === 0) {
            return res.status(404).json({ message: 'Image not found' });
        }
        image.likeCount -= 1;
        const updatedImage = await image.save();
        res.status(200).json(updatedImage);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getLikes = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }
    try {
        const image = await Image.findById(req.params.id);
        if (!image || image.length === 0) {
            return res.status(404).json({ message: 'Image not found' });
        }
        res.status(200).json(image.likeCount);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getTags = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }
    try {
        const image = await Image.findById(req.params.id);
        if (!image || image.length === 0) {
            return res.status(404).json({ message: 'Image not found' });
        }
        res.status(200).json(image.tags);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const addTag = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }
    try {
        const image = await Image.findById(req.params.id);
        if (!image || image.length === 0) {
            return res.status(404).json({ message: 'Image not found' });
        }
        image.tags.push(req.body.tags);
        const updatedImage = await image.save();
        res.status(200).json(updatedImage);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const removeTag = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }
    try {
        const image = await Image.findById(req.params.id);
        if (!image || image.length === 0) {
            return res.status(404).json({ message: 'Image not found' });
        }
        image.tags.splice(image.tags.indexOf(req.body.tags), 1);
        const updatedImage = await image.save();
        res.status(200).json(updatedImage);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
