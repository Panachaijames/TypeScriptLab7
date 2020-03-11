import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnaughtPageRoutingModule } from './connaught-routing.module';

import { ConnaughtPage } from './connaught.page';

import { ConnaughtCountiesPagePageModule } from '../connaught-counties-page/connaught-counties-page.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnaughtPageRoutingModule,
    ConnaughtCountiesPagePageModule
  ],
  declarations: [ConnaughtPage]
})
export class ConnaughtPageModule {}
