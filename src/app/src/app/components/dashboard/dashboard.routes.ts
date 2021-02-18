import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../Auth/auth.guard';
export const DashboardRoutes: Route[] = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    }
]