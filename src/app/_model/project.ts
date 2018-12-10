import {Category} from './category';
import {User} from '../user';

export class Project {
    id: number;
    name: string;
    category: Category;
    author: User;
    start: Date;
    end: Date;
}
