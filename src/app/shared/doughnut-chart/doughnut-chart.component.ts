import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  @Input() title: string = 'Title';
  @Input() chartData: number[] = [50, 50];
  @Input() chartLabels: string[] = ['test', 'nothing'];
  @Input() chartColors: any[] = [{ backgroundColor: ['#009688', '#ffffff'] }];
  chartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  chartHovered($event) {}
  chartClicked($event) {}
}
