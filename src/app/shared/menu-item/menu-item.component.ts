import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MenuButtonService } from '../../providers/menu-button.service';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() routerLink: string;
  @Input() label: string;

  @HostListener('click', ['$event'])
  onItemSelected($event) {
    this.menuButtonService.open$.next(false);
  }

  constructor(private menuButtonService: MenuButtonService) { }

  ngOnInit() {
  }

}
