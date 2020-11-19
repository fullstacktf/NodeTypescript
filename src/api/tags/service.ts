import { Tag } from './models';
// import fetch from 'node-fetch';
// import { Collection, Db, MongoClient } from 'mongodb';
import { TagsRepository } from './TagsRepository';

const tagsRepository = new TagsRepository();

export function createTag(tag: Tag): Tag {
  tagsRepository.save(tag);
  return tag;
}
