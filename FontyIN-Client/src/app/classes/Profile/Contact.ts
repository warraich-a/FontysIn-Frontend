import { User } from './User';

export class Contact {
    id: number;
    user: User;
    friend: User;
    isAccepted: boolean;    
}