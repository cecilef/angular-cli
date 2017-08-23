import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { FocusDirective } from './directives/focus/focus.directive';
import { ImageSectionComponent } from './image-section/image-section.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuButtonComponent,
    MenuItemComponent,
    SidePanelComponent,
    ImageSectionComponent
  ],
  declarations: [
    MenuButtonComponent,
    MenuItemComponent,
    SidePanelComponent,
    FocusDirective,
    ImageSectionComponent
  ]
})
export class SharedModule { }
