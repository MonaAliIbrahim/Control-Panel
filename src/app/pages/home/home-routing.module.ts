import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  { path: '', redirectTo: '/client', pathMatch: 'full' },
  {
    path: '', component: HomePage, children: [
      {
        path: 'client', children: [
          { path: '', loadChildren: () => import('../clients/clients.module').then( m => m.ClientsPageModule) },
          { path: 'edit/:id', loadChildren: () => import('../edit-client/edit-client.module').then( m => m.EditClientPageModule) },
          { path: ':id', loadChildren: () => import('../client-details/client-details.module').then( m => m.ClientDetailsPageModule) },
        ]
      },
      {
        path: 'addClient', loadChildren: () => import('../add-client/add-client.module').then( m => m.AddClientPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
