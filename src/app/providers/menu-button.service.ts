import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MenuButtonService {

  open$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(undefined);

  constructor() { }
}
