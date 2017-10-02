import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TroubleshootPage } from './troubleshoot';

@NgModule({
  declarations: [
    TroubleshootPage,
  ],
  imports: [
    IonicPageModule.forChild(TroubleshootPage),
  ],
})
export class TroubleshootPageModule {}
