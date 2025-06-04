import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

export class UserController {
  public async getUserProfile(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const user = await userService.getUserById(userId);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve user', error });
    }
  }

  public async updateUserProfile(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const updatedUser = await userService.updateUser(userId, req.body);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update user', error });
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      await userService.deleteUser(userId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete user', error });
    }
  }

  public async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch users', error });
    }
  }
}
