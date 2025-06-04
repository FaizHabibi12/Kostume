import express from 'express';
import RentalController from '../controllers/rentalController';

const router = express.Router();
const rentalController = new RentalController();

router.post('/', rentalController.createRental);
router.get('/', rentalController.getRentals);
router.get('/:id', rentalController.getRentalById);
router.put('/:id', rentalController.updateRental);
router.delete('/:id', rentalController.deleteRental);

export const rentalRoutes = router;
