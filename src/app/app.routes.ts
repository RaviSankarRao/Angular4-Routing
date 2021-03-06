

import { Routes } from "@angular/router";

import { HomeComponent } from "app/home/home.component";
import { UsersComponent } from "app/users/users.component";
import { ServersComponent } from "app/servers/servers.component";
import { UserComponent } from "app/users/user/user.component";
import { EditServerComponent } from "app/servers/edit-server/edit-server.component";
import { ServerComponent } from "app/servers/server/server.component";

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id/:name',
        component: UserComponent
      },
    ]
  },
  // {
  //   path: 'users/:id/:name', //dynamic parameter 'id'. This user's id can be retirved from the route using ActivatedRoute
  //   component: UserComponent
  // },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      {
        path: ':id',
        component: ServerComponent
      },
      {
        path: ':id/edit',
        component: EditServerComponent
      }
    ]
  },
  // Below routes are moved as child/nested routes, as shown above

  // {
  //   path: 'servers/:id',
  //   component: ServerComponent
  // },
  // {
  //   path: 'servers/:id/edit',
  //   component: EditServerComponent
  // }
];