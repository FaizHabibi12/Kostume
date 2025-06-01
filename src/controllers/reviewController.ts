import { Request, Response } from 'express';
import ReviewService from '../services/reviewService';

class ReviewController {
  async addReview(req: Request, res: Response) {
    try {
      const reviewData = req.body;
      const newReview = await ReviewService.addReview(reviewData);
      res.status(201).json(newReview);
    } catch (error) {
      res.status(500).json({ message: 'Error adding review', error });
    }
  }

  async getReviews(req: Request, res: Response) {
    try {
      const costumeId = req.params.costumeId;
      const reviews = await ReviewService.getReviewsByCostumeId(costumeId);
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving reviews', error });
    }
  }
}

export default new ReviewController();