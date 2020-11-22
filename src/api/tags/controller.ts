import express, { Router } from 'express';
import { TagsService } from './service';

export class TagsController {
  private service: TagsService;
  public readonly router: Router;

  constructor(service: TagsService) {
    this.service = service;
    this.router = express.Router();

    this.router.post('/', this.createTag);
    this.router.get('/', this.getAllTags);
    this.router.delete('/:id', this.deleteTagById);
  }

  private async createTag(req: express.Request, res: express.Response) {
    const rawTag = req.body;
    await this.service.createTag(rawTag);
    res.json({ message: 'Tag created' });
  }

  private async getAllTags(req: express.Request, res: express.Response) {
    const tagsCollection = this.service.getAllTags();
    res.json(tagsCollection);
  }

  private async deleteTagById(req: express.Request, res: express.Response) {
    const tagIdToDelete = req.params.id;
    await this.service.deleteTagById(tagIdToDelete);
    res.json({ message: 'Tag deleted' });
  }
}
