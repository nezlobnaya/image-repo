import express from 'express';

import { getImages, getImage, postImage, updateImage, deleteImage, deleteAllImages, getImagesByTag, getImagesByTitle, getImagesByDescription, getImagesByDate, getLikes, likeImage, dislikeImage, addTag, removeTag, getTags } from '../../controllers/imageControllers/index.js';

const router = express.Router();

router.get('/', getImages);
router.get('/:id', getImage);
router.post('/', postImage);
router.put('/:id', updateImage);
router.delete('/:id', deleteImage);
router.delete('/', deleteAllImages);


router.get('/tag/:id', getImagesByTag);
router.get('/title/:id', getImagesByTitle);
router.get('/description/:id', getImagesByDescription);
router.get('/date/:id', getImagesByDate);

router.put('/like/:id', likeImage);
router.put('/dislike/:id', dislikeImage);
router.put('/tag/:id', addTag);
router.put('/untag/:id', removeTag);

router.get('/tags/:id', getTags);
router.get('/likes/:id', getLikes)

export default router;

