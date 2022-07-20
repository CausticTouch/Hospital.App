import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HubPageRoutingModule } from './hub-routing.module';

import { HubPage } from './hub.page';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    HubPageRoutingModule
  ],
  declarations: [HubPage],
  providers: [HttpClient]
})
export class HubPageModule {}
