import express from 'express';
import { json } from 'body-parser';
import { authRoutes } from './routes/authRoutes';
import { costumeRoutes } from './routes/costumeRoutes';
import { userRoutes } from './routes/userRoutes';
import { rentalRoutes } from './routes/rentalRoutes';
import { reviewRoutes } from './routes/reviewRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/costumes', costumeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/rentals', rentalRoutes);
app.use('/api/reviews', reviewRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});