import { BaseModel } from '../../helpers/Database';

export interface Book extends BaseModel {
  isbn: number;
  name: string;
  categoria: string;
  like: boolean;
}
