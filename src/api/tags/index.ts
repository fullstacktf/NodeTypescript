import { Database } from '../../helpers/Database';
import { TagsRepository } from './repository';
import { TagsService } from './service';
import { TagsController } from './controller';

export const generateTagsRouter = (database: Database) => {
  const tagsRepository = new TagsRepository(database);
  const tagsService = new TagsService(tagsRepository);
  const tagsController = new TagsController(tagsService);

  return tagsController.router;
};
