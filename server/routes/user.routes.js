import express from 'express';
import { createOneUser, getAllUsers, getOneUserById, deleteOneUserById, updateOneUserById } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/api/users', getAllUsers)
router.post('/api/users', createOneUser)
router.get('/api/users/:id', getOneUserById)
router.put('/api/users/:id', updateOneUserById)
router.delete('/api/users/:id', deleteOneUserById)

export default router;

