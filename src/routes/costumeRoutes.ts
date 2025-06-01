import { Router } from 'express';
import { CostumeController } from '../controllers/costumeController';

const router = Router();
const costumeController = new CostumeController();

router.post('/', costumeController.createCostume);
router.get('/', costumeController.getAllCostumes);
router.get('/:id', costumeController.getCostumeById);
router.put('/:id', costumeController.updateCostume);
router.delete('/:id', costumeController.deleteCostume);

export const costumeRoutes = router;