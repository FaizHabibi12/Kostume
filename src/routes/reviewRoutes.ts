import { Router } from 'express';
import { ReviewController } from '../controllers/reviewController';

const router = Router();
const reviewController = new ReviewController();

// Route to add a review
router.post('/', reviewController.addReview);

// Route to get all reviews for a costume
router.get('/:costumeId', reviewController.getReviewsByCostume);

// Route to get a specific review by ID
router.get('/review/:id', reviewController.getReviewById);

// Route to update a review
router.put('/review/:id', reviewController.updateReview);

// Route to delete a review
router.delete('/review/:id', reviewController.deleteReview);

export const reviewRoutes = router;