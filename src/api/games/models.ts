import { BaseModel } from '../../helpers/Database';

export interface Game extends BaseModel {
  id: number;
  name: string;
  categoria: string;
  like: boolean;
  players: number;
  age: number;
}
