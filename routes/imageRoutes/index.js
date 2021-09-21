import express from 'express';

import { getImages, getImage, postImage, updateImage, deleteImage, deleteAllImages, getImagesByUser, getImagesByTag, getImagesByTitle, getImagesByDescription, getImagesByDate, likeImage, dislikeImage, addTag, removeTag } from '../../controllers/index.js';

const router = express.Router();


router.get('/', getImages);
router.get('/:id', getImage);
router.post('/', postImage);
router.put('/:id', updateImage);
router.delete('/:id', deleteImage);
router.delete('/', deleteAllImages);
router.get('/user/:id', getImagesByUser);
router.get('/tag/:id', getImagesByTag);
router.get('/title/:id', getImagesByTitle);
router.get('/description/:id', getImagesByDescription);
router.get('/date/:id', getImagesByDate);
router.put('/like/:id', likeImage);
router.put('/dislike/:id', dislikeImage);
router.put('/tag/:id', addTag);
router.put('/untag/:id', removeTag);

export default router;

