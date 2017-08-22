import { Component, Input, OnInit } from '@angular/core';
import { HorizontalPosition } from '../../providers/types/horizontal-position.type';

@Component({
  selector: 'app-image-section',
  templateUrl: './image-section.component.html',
  styleUrls: ['./image-section.component.scss']
})
export class ImageSectionComponent implements OnInit {

  @Input() imagePosition: HorizontalPosition = 'left';

  constructor() { }

  ngOnInit() {
  }

}
