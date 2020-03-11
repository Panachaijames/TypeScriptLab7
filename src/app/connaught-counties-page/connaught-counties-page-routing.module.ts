import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnaughtCountiesPagePage } from './connaught-counties-page.page';

const routes: Routes = [
  {
    path: '',
    component: ConnaughtCountiesPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnaughtCountiesPagePageRoutingModule {}
