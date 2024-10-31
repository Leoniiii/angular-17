import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { UsersService } from '@services/users.service';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () =>
          import(
            './dashboard/pages/change-detection/change-detection.component'
          ),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () =>
          import('./dashboard/pages/control-flow/control-flow.component'),
      },

      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () =>
          import('./dashboard/pages/defer-options/defer-options.component'),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () =>
          import('./dashboard/pages/defer-views/defer-views.component'),
      },
      {
        path: 'user/:id',
        title: 'User',
        loadComponent: () => import('./dashboard/pages/user/user.component'),
      },
      {
        path: 'user-list',
        title: 'User List',
        loadComponent: () => import('./dashboard/pages/users/users.component'),
      },
      {
        path: 'view-transition',
        title: 'View Transition',
        loadComponent: () =>
          import('./dashboard/pages/view-transition/view-transition.component'),
      },
      {
        path: 'view-transition-2',
        title: 'View Transition-2',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transition2/view-transition2.component'
          ),
      },
      {
        path: 'inputs-outputs',
        title: 'Inputs Outputs',
        loadComponent: () =>
          import('./dashboard/pages/input-output/input-output.component'),
      },
      {
        path: '',
        // redirectTo: 'control-flow',
        redirectTo: () => {
          const userService = inject(UsersService);
          if (userService.users().length == 0) {
            return 'inputs-outputs';
          }
          return 'control-flow';
        },
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
