import { User } from './models';
import { UsersRepository } from './UsersRepository';

let usersDB: User[] = [
  {
    id: 1,
    name: 'Pablo',
    surname: 'Rodríguez',
    email: 'pablo@gmail.com',
    age: new Date(),
    rol: 'user'
  },
  {
    id: 2,
    name: 'Pepe',
    surname: 'Rodríguez',
    email: 'pepe@gmail.com',
    age: new Date(),
    rol: 'admin'
  },
  {
    id: 3,
    name: 'Daniel',
    email: 'daniel@gmail.com',
    age: new Date(),
    rol: 'user'
  }
];

export const findUserById = (id: number): User | undefined => {

  // const userRepository = new UsersRepository();
  // userRepository.save(user);
  const user = usersDB.find(user => user.id === id);

  return user;
};
