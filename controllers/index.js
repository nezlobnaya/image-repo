import mongoose from 'mongoose';
import Image from '../models/image.js';

export const getImages = (req, res) => {
    try {
        Image.find({}, (err, images) => {
            if (err) {
                res.send(err);
            }
            res.json(images);
        });
    }
    catch (err) {
        res.send(err);
    }
};

export const getImage = (req, res) => {
    try {
        Image.findById(req.params.id, (err, image) => {
            if (err) {
                res.send(err);
            }
            res.json(image);
        });
    }
    catch (err) {
        res.send(err);
    }
};

export const postImage = (req, res) => {
    try {
        const newImage = new Image(req.body);
        newImage.save((err, image) => {
            if (err) {
                res.send(err);
            }
            res.json(image);
        });
    }
    catch (err) {
        res.send(err);
    }
};

export const updateImage = (req, res) => {
    try {
        Image.findById(req.params.id, (err, image) => {
            if (err) {
                res.send(err);
            }
            image.title = req.body.title;
            image.description = req.body.description;
            image.save((err, image) => {
                if (err) {
                    res.send(err);
                }
                res.json(image);
            });
        });
    }
    catch (err) {
        res.send(err);
    }
};

export const deleteImage = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({
            error: 'Invalid ID',
        });
    }

    try {
        const image = await Image.findById(id);

        if (!image) {
            res.status(404).json({
                error: 'Image not found',
            });
        }

        await image.remove();

        res.json({
            message: 'Image deleted',
        });
    }
    catch (err) {
        res.status(500).json({
            error: err,
        });
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
        res.status(500).json({
            error: err,
        });
    }
};

export const getImagesByUser = (req, res) => {
    try {
        Image.find({ user: req.params.id }, (err, images) => {
            if (err) {
                res.send(err);
            }
            res.json(images);
        });
    }
    catch (err) {
        res.send(err);
    }
};

export const getImagesByTag = (req, res) => {
    try {
        Image.find({ tags: req.params.id }, (err, images) => {
            if (err) {
                res.send(err);
            }
            res.json(images);
        });
    }
    catch (err) {
        res.send(err);
    }
};

export const getImagesByTitle = (req, res) => {
    try {
        Image.find({ title: req.params.id }, (err, images) => {
            if (err) {
                res.send(err);
            }
            res.json(images);
        });
    }
    catch (err) {
        res.send(err);
    }
};

export const getImagesByDescription = (req, res) => {
    try {
        Image.find({ description: req.params.id }, (err, images) => {
            if (err) {
                res.send(err);
            }
            res.json(images);
        });
    }
    catch (err) {
        res.send(err);
    }
};

export const getImagesByDate = (req, res) => {
    try {
        Image.find({ date: req.params.id }, (err, images) => {
            if (err) {
                res.send(err);
            }
            res.json(images);
        });
    }
    catch (err) {
        res.send(err);
    }
};

export const likeImage = (req, res) => {
    try {
        Image.findById(req.params.id, (err, image) => {
            if (err) {
                res.send(err);
            }
            image.likes++;
            image.save((err, image) => {
                if (err) {
                    res.send(err);
                }
                res.json(image);
            });
        });
    }
    catch (err) {
        res.send(err);
    }
};

export const dislikeImage = (req, res) => {
    try {
        Image.findById(req.params.id, (err, image) => {
            if (err) {
                res.send(err);
            }
            image.likes--;
            image.save((err, image) => {
                if (err) {
                    res.send(err);
                }
                res.json(image);
            });
        });
    }
    catch (err) {
        res.send(err);
    }
};

export const getLikes = (req, res) => {
    try {
        Image.findById(req.params.id, (err, image) => {
            if (err) {
                res.send(err);
            }
            res.json(image.likes);
        });
    }
    catch (err) {
        res.send(err);
    }
};

export const getTags = (req, res) => {
    try {
        Image.findById(req.params.id, (err, image) => {
            if (err) {
                res.send(err);
            }
            res.json(image.tags);
        });
    }
    catch (err) {
        res.send(err);
    }
};

export const addTag = (req, res) => {
    try {
        Image.findById(req.params.id, (err, image) => {
            if (err) {
                res.send(err);
            }
            image.tags.push(req.body.tag);
            image.save((err, image) => {
                if (err) {
                    res.send(err);
                }
                res.json(image);
            });
        });
    }
    catch (err) {
        res.send(err);
    }
};

export const removeTag = (req, res) => {
    try {
        Image.findById(req.params.id, (err, image) => {
            if (err) {
                res.send(err);
            }
            image.tags.pull(req.body.tag);
            image.save((err, image) => {
                if (err) {
                    res.send(err);
                }
                res.json(image);
            });
        });
    }
    catch (err) {
        res.send(err);
    }
};
