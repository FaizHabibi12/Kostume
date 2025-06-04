import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ReviewService {
  async createReview(userId: string, costumeId: string, rating: number, comment?: string) {
    return await prisma.review.create({
      data: {
        userId,
        costumeId,
        rating,
        comment,
      },
    });
  }

  async getReviewsByCostume(costumeId: string) {
    return await prisma.review.findMany({
      where: { costumeId },
      include: { user: true },
    });
  }

  async getReviewById(reviewId: string) {
    return await prisma.review.findUnique({
      where: { id: reviewId },
      include: { user: true },
    });
  }

  async updateReview(reviewId: string, rating: number, comment?: string) {
    return await prisma.review.update({
      where: { id: reviewId },
      data: { rating, comment },
    });
  }

  async deleteReview(reviewId: string) {
    return await prisma.review.delete({
      where: { id: reviewId },
    });
  }
}

export default new ReviewService();
