import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  @Input() open: boolean;

  constructor() { }

  ngOnInit() {
  }

}
