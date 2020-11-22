import { Tag } from './models';
import { TagsRepository } from './repository';

export class TagsService {
  private readonly repository: TagsRepository;

  constructor(tagsRepository: TagsRepository) {
    this.repository = tagsRepository;
  }

  async createTag(tag: Tag) {
    await this.repository.save(tag);
  }

  async deleteTagById(id: string) {
    await this.repository.deleteById(id);
  }

  async getAllTags(): Promise<Tag[]> {
    return await this.repository.findAll();
  }
}
