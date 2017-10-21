import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cv-skills',
  templateUrl: './cv-skills.component.html',
  styleUrls: ['./cv-skills.component.scss']
})
export class CvSkillsComponent implements OnInit {

  chartData: number[] = [50, 50];
  chartLabels: string[] = ['test', 'nothing'];
  chartColors: any[] = [{ backgroundColor: ['#009688', '#ffffff'] }];
  @Input() title: string = 'Coding';

  constructor() { }

  ngOnInit() {
  }
}
