import { UsersService } from './service';
import { Router } from 'express';

export class UsersController {
  private service: UsersService;
  public readonly router: Router;

  constructor(usersService: UsersService) {
    this.service = usersService;
    this.router = Router();
  }
}
