import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnaughtCountiesPagePageRoutingModule } from './connaught-counties-page-routing.module';

import { ConnaughtCountiesPagePage } from './connaught-counties-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnaughtCountiesPagePageRoutingModule
  ],
  exports: [ConnaughtCountiesPagePage],
  declarations: [ConnaughtCountiesPagePage]
})
export class ConnaughtCountiesPagePageModule {}
