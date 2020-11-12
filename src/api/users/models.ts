type Role = 'user' | 'admin';

export interface User {
    id: number;
    name: string;
    surname?: string;
    email: string;
    age: Date; 
    rol: Role;
}
