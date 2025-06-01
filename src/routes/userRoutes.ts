import { Router } from 'express';
import { UserController } from '../controllers/userController';

const router = Router();
const userController = new UserController();

// Route to get user profile
router.get('/profile', userController.getUserProfile);

// Route to update user information
router.put('/profile', userController.updateUserProfile);

export const userRoutes = router;