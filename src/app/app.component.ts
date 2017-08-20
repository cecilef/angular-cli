import { Component, OnInit } from '@angular/core';
import { MenuButtonService } from './providers/menu-button.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  panelOpen: boolean = false;

  constructor(private menuButtonService: MenuButtonService) {
  }

  ngOnInit() {
    this.menuButtonService.menu$.subscribe(() => {
      this.panelOpen = !this.panelOpen;
    });
  }
}
