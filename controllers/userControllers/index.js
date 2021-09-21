import mongoose from 'mongoose';
import User from '../../models/User.js';

const ObjectId = mongoose.Types.ObjectId;

// Users

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
export const getUser = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.json(user);
        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createUser = async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const updateUser = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = req.body.password;
        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteUser = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        await user.remove();
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getImagesByUser = async (req, res) => {
    try {
        const creatorId = req.params.id;
        const images = await User.aggregate([
            { $match: { _id: ObjectId(creatorId) } },
            { 
                $lookup: {
                    from: 'images',
                    localField: '_id',
                    foreignField: 'creatorId',
                    as: 'images'
                }
            }
        ]);
        if (!images) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(images);

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
