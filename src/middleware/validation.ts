import { Request, Response, NextFunction } from 'express';

interface ValidationError {
  field: string;
  message: string;
}

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  return !isNaN(date.getTime()) && dateString === date.toISOString().split('T')[0];
};

export const validateUserRegistration = (req: Request, res: Response, next: NextFunction) => {
  const errors: ValidationError[] = [];
  const { name, email, password } = req.body;

  if (!name || typeof name !== 'string' || name.trim() === '') {
    errors.push({ field: 'name', message: 'Name is required' });
  }

  if (!email || !isValidEmail(email)) {
    errors.push({ field: 'email', message: 'Valid email is required' });
  }

  if (!password || typeof password !== 'string' || password.length < 6) {
    errors.push({ field: 'password', message: 'Password must be at least 6 characters long' });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

export const validateCostumeCreation = (req: Request, res: Response, next: NextFunction) => {
  const errors: ValidationError[] = [];
  const { title, description, price } = req.body;

  if (!title || typeof title !== 'string' || title.trim() === '') {
    errors.push({ field: 'title', message: 'Title is required' });
  }

  if (!description || typeof description !== 'string' || description.trim() === '') {
    errors.push({ field: 'description', message: 'Description is required' });
  }

  if (!price || isNaN(Number(price)) || Number(price) <= 0) {
    errors.push({ field: 'price', message: 'Price must be a positive number' });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

export const validateRentalCreation = (req: Request, res: Response, next: NextFunction) => {
  const errors: ValidationError[] = [];
  const { costumeId, userId, startDate, endDate } = req.body;

  if (!costumeId || typeof costumeId !== 'string' || costumeId.trim() === '') {
    errors.push({ field: 'costumeId', message: 'Costume ID is required' });
  }

  if (!userId || typeof userId !== 'string' || userId.trim() === '') {
    errors.push({ field: 'userId', message: 'User ID is required' });
  }

  if (!startDate || !isValidDate(startDate)) {
    errors.push({ field: 'startDate', message: 'Start date must be a valid date' });
  }

  if (!endDate || !isValidDate(endDate)) {
    errors.push({ field: 'endDate', message: 'End date must be a valid date' });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

export const validateReviewCreation = (req: Request, res: Response, next: NextFunction) => {
  const errors: ValidationError[] = [];
  const { costumeId, rating } = req.body;

  if (!costumeId || typeof costumeId !== 'string' || costumeId.trim() === '') {
    errors.push({ field: 'costumeId', message: 'Costume ID is required' });
  }

  if (!rating || !Number.isInteger(Number(rating)) || Number(rating) < 1 || Number(rating) > 5) {
    errors.push({ field: 'rating', message: 'Rating must be between 1 and 5' });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};