import { Router } from 'express';
import RentalController from '../controllers/rentalController';

const router = Router();
const rentalController = new RentalController();

// Define rental routes
router.post('/', rentalController.createRental);
router.get('/:id', rentalController.getRental);
router.get('/', rentalController.getAllRentals);
router.put('/:id', rentalController.updateRental);
router.delete('/:id', rentalController.deleteRental);

export default router;