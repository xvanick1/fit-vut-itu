import { Injectable } from '@angular/core';
import {Position} from '../_model/position';

@Injectable({
  providedIn: 'root'
})
export class ProjectdetailService {


  public positionsArray: Position[];

  constructor() { }
}
