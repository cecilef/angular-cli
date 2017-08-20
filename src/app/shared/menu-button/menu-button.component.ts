import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { MenuButtonService } from '../../providers/menu-button.service';

@Component({
  selector: 'cf-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {

  constructor(private menuButtonService: MenuButtonService) {
  }

  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  onClick($event) {
    this.menuButtonService.emitClickAction();
  }
}
