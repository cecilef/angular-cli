import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './menu/menu.component';
import { FocusDirective } from './directives/focus/focus.directive';
import { ImageSectionComponent } from './image-section/image-section.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    DoughnutChartComponent,
    ImageSectionComponent,
    MenuButtonComponent,
    MenuItemComponent,
    MenuComponent
  ],
  declarations: [
    DoughnutChartComponent,
    FocusDirective,
    ImageSectionComponent,
    MenuButtonComponent,
    MenuItemComponent,
    MenuComponent
  ]
})
export class SharedModule { }
