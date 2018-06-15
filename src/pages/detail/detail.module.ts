import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import { Ng2Rut } from 'ng2-rut';
import { CallNumber } from '@ionic-native/call-number';

@NgModule({
  declarations: [
    DetailPage,
  ],
  imports: [
    Ng2Rut,
    IonicPageModule.forChild(DetailPage),
  ],
  providers: [CallNumber]
})
export class DetailPageModule {}
