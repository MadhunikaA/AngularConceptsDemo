import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard.routes';
import { FormsModule } from '@angular/forms';
import { ContentComponent } from '../content.component';

@NgModule({
  declarations: [DashboardComponent,ContentComponent],
  exports: [DashboardComponent,ContentComponent],
  imports: [
    RouterModule.forChild(DashboardRoutes),
    CommonModule,
    FormsModule
  ]
})
export class DashboardModule { }
