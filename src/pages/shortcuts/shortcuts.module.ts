import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShortcutsPage } from './shortcuts';

@NgModule({
  declarations: [
    ShortcutsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShortcutsPage),
  ],
})
export class ShortcutsPageModule {}
