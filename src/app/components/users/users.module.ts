import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { UsersRoutes } from './users.routes';
import { FormsModule } from '@angular/forms';
import { HostColorDirective} from '../../directives/hostlistener.directive';
import { ChildComponent} from '../child.component';
@NgModule({
  declarations: [UsersComponent,HostColorDirective,ChildComponent],
  exports: [UsersComponent,HostColorDirective,ChildComponent],
  imports: [
    RouterModule.forChild(UsersRoutes),
    CommonModule,
    FormsModule
  ]
})
export class UsersModule { }
