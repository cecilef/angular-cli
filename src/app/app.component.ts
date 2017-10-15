import { Component, OnInit } from '@angular/core';
import { MenuButtonService } from './providers/menu-button.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  menuOpen: boolean = false;

  constructor(private menuButtonService: MenuButtonService) {
  }

  ngOnInit() {
    this.menuButtonService.open$.subscribe((open) => {
      this.menuOpen = open;
    });
  }
}
