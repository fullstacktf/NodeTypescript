import express, { Router } from 'express';
import { BookService } from './service';

export class BookController {
  private service: BookService;
  public readonly router: Router;

  constructor(service: BookService) {
    this.service = service;
    this.router = express.Router();
  }
}
