export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  createdAt: Date;
}

export interface Costume {
  id: string;
  title: string;
  description: string;
  price: number;
  isForSale: boolean;
  isForRent: boolean;
  imageUrl: string;
  categoryId: string;
  ownerId: string;
  createdAt: Date;
}

export interface Rental {
  id: string;
  userId: string;
  costumeId: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  status: RentalStatus;
}

export interface Review {
  id: string;
  rating: number;
  comment?: string;
  userId: string;
  costumeId: string;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum RentalStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  CANCELLED = 'CANCELLED',
  RETURNED = 'RETURNED',
}