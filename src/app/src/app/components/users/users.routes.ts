import { Route } from '@angular/router';
import { UsersComponent } from './users.component'
import { AuthGuard } from '../Auth/auth.guard';
export const UsersRoutes: Route[] = [
    {
        path: '',
        component: UsersComponent,
        canActivate: [AuthGuard]

    }
]