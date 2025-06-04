import { Request, Response } from 'express';
import { CostumeService } from '../services/costumeService';

const costumeService = new CostumeService();

export class CostumeController {
  public async createCostume(req: Request, res: Response): Promise<void> {
    try {
      const costumeData = req.body;
      const newCostume = await costumeService.createCostume(costumeData);
      res.status(201).json(newCostume);
    } catch (error) {
      res.status(500).json({ message: 'Error creating costume', error });
    }
  }

  public async getCostumes(req: Request, res: Response): Promise<void> {
    try {
      const costumes = await costumeService.getAllCostumes();
      res.status(200).json(costumes);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving costumes', error });
    }
  }

  public async getCostumeById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const costume = await costumeService.getCostumeById(id);
      if (!costume) {
        res.status(404).json({ message: 'Costume not found' });
        return;
      }
      res.status(200).json(costume);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving costume', error });
    }
  }

  public async updateCostume(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updatedCostume = await costumeService.updateCostume(id, req.body);
      res.status(200).json(updatedCostume);
    } catch (error) {
      res.status(500).json({ message: 'Error updating costume', error });
    }
  }

  public async deleteCostume(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await costumeService.deleteCostume(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error deleting costume', error });
    }
  }
}
