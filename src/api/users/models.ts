import { BaseModel } from '../../helpers/Database';

type Role = 'user' | 'admin';

export interface User extends BaseModel {
  id: number;
  name: string;
  surname?: string;
  email: string;
  age: Date;
  rol: Role;
}
