import {Category} from './category';

export class Project {
    id: number;
    name: string;
    category: Category;
    author: User;
    start: Date;
    end: Date;
}
