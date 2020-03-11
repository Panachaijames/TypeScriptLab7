import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'ulster',
    loadChildren: () => import('./ulster/ulster.module').then( m => m.UlsterPageModule)
  },
  {
    path: 'munster',
    loadChildren: () => import('./munster/munster.module').then( m => m.MunsterPageModule)
  },
  {
    path: 'connaught',
    loadChildren: () => import('./connaught/connaught.module').then( m => m.ConnaughtPageModule)
  },
  {
    path: 'leinster',
    loadChildren: () => import('./leinster/leinster.module').then( m => m.LeinsterPageModule)
  },
  {
    path: 'leinster-countries',
    loadChildren: () => import('./leinster-countries/leinster-countries.module').then( m => m.LeinsterCountriesPageModule)
  },
  {
    path: 'connaught-counties-page',
    loadChildren: () => import('./connaught-counties-page/connaught-counties-page.module').then( m => m.ConnaughtCountiesPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
