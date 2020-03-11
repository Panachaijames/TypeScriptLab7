import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeinsterCountriesPageRoutingModule } from './leinster-countries-routing.module';

import { LeinsterCountriesPage } from './leinster-countries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeinsterCountriesPageRoutingModule
  ],
  declarations: [LeinsterCountriesPage]
})
export class LeinsterCountriesPageModule {}
