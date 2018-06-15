import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindPage } from './find';
import { Ng2Rut } from 'ng2-rut';

@NgModule({
  declarations: [
    FindPage,
  ],
  imports: [
    Ng2Rut,
    IonicPageModule.forChild(FindPage),
  ],
})
export class FindPageModule {}
