import { Component, HostBinding, HostListener, OnInit, Output } from '@angular/core';
import { MenuButtonService } from '../../providers/menu-button.service';

@Component({
  selector: 'cf-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {

  @HostBinding('class.active') active: boolean = false;

  constructor(private menuButtonService: MenuButtonService) {
  }

  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  onClick($event) {
    this.active = !this.active;
    this.menuButtonService.emitClickAction();
  }
}
