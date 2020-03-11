import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeinsterCountriesPage } from './leinster-countries.page';

const routes: Routes = [
  {
    path: '',
    component: LeinsterCountriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeinsterCountriesPageRoutingModule {}
