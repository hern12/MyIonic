import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalbmePage } from './calbme';

@NgModule({
  declarations: [
    CalbmePage,
  ],
  imports: [
    IonicPageModule.forChild(CalbmePage),
  ],
})
export class CalbmePageModule {}
