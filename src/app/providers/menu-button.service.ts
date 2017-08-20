import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MenuButtonService {

  private menuSource: Subject<any> = new Subject<any>();
  menu$ = this.menuSource.asObservable();

  constructor() { }

  emitClickAction() {
    this.menuSource.next();
  }
}
