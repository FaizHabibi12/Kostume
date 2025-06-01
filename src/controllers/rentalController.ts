import { Request, Response } from 'express';
import RentalService from '../services/rentalService';

class RentalController {
  private rentalService: RentalService;

  constructor() {
    this.rentalService = new RentalService();
  }

  public createRental = async (req: Request, res: Response): Promise<void> => {
    try {
      const rentalData = req.body;
      const rental = await this.rentalService.createRental(rentalData);
      res.status(201).json(rental);
    } catch (error) {
      res.status(500).json({ message: 'Error creating rental', error });
    }
  };

  public getRentals = async (req: Request, res: Response): Promise<void> => {
    try {
      const rentals = await this.rentalService.getRentals();
      res.status(200).json(rentals);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving rentals', error });
    }
  };

  public getRentalById = async (req: Request, res: Response): Promise<void> => {
    try {
      const rentalId = req.params.id;
      const rental = await this.rentalService.getRentalById(rentalId);
      if (rental) {
        res.status(200).json(rental);
      } else {
        res.status(404).json({ message: 'Rental not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving rental', error });
    }
  };

  public updateRental = async (req: Request, res: Response): Promise<void> => {
    try {
      const rentalId = req.params.id;
      const rentalData = req.body;
      const updatedRental = await this.rentalService.updateRental(rentalId, rentalData);
      if (updatedRental) {
        res.status(200).json(updatedRental);
      } else {
        res.status(404).json({ message: 'Rental not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating rental', error });
    }
  };

  public deleteRental = async (req: Request, res: Response): Promise<void> => {
    try {
      const rentalId = req.params.id;
      const deletedRental = await this.rentalService.deleteRental(rentalId);
      if (deletedRental) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Rental not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting rental', error });
    }
  };
}

export default RentalController;