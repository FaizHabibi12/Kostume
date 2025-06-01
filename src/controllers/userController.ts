import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async getUserProfile(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const userProfile = await this.userService.getUserById(userId);
      res.status(200).json(userProfile);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving user profile', error });
    }
  }

  public async updateUserProfile(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const updatedData = req.body;
      const updatedUser = await this.userService.updateUser(userId, updatedData);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: 'Error updating user profile', error });
    }
  }
}