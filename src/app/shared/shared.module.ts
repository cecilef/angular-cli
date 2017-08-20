import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownMenuComponent } from './menu-button/menu-button.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SidePanelComponent } from './side-panel/side-panel.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    DropdownMenuComponent,
    MenuItemComponent
  ],
  declarations: [
    DropdownMenuComponent,
    MenuItemComponent,
    SidePanelComponent
  ]
})
export class SharedModule { }
