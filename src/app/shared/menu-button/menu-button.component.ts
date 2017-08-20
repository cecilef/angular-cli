import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cf-dropdown-menu',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  onClick($event) {
    this.buttonClicked.emit();
  }
}
