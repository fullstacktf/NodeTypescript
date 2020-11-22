import { BaseModel } from '../../helpers/Database';

export interface Movie extends BaseModel {
  id: number;
  name: string;
  categoria: string;
  like: boolean;
}
