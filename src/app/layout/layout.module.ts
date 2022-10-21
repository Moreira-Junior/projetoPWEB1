import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MenuComponent
  ]
})
export class LayoutModule { }
