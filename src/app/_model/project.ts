import {Category} from './category';
import {User} from '../user';
import {Position} from './position';

export class Project {
    id: number;
    name: string;
    category: Category;
    author: User;
    start: Date;
    end: Date;
    description: string;
    isPaid: boolean;
    longTime: boolean;
    positions: Position[];
    _positionsCount: number;
    _registredPositionsCount: number;
}
