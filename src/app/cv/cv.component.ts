import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  chartData: number[] = [50, 50];
  chartLabels: string[] = ['test', 'nothing'];
  chartColors: any[] = [{ backgroundColor: ['#009688', '#ffffff'] }];

  constructor() { }

  ngOnInit() {
  }

  chartHovered($event) {}
  chartClicked($event) {}
}
