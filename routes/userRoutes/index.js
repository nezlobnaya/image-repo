import express from 'express';

import { getUser, getUsers, createUser, updateUser, deleteUser, getImagesByUser } from '../../controllers/userControllers.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.get('/:id/images', getImagesByUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;

