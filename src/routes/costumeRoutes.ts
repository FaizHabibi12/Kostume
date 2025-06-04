import express from 'express';
import { CostumeController } from '../controllers/costumeController';

const router = express.Router();
const controller = new CostumeController();

router.post('/', controller.createCostume);
router.get('/', controller.getCostumes);
router.get('/:id', controller.getCostumeById);
router.put('/:id', controller.updateCostume);
router.delete('/:id', controller.deleteCostume);

export const costumeRoutes = router;
