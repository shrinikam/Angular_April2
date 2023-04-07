import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { STRINTRComponent } from './strintr/strintr.component';
import { DemoComponent } from './demo/demo.component';
import { SrcComponentComponent } from './src-component/src-component.component';
import { SrcBackupComponent } from './src-backup/src-backup.component';
import { SrcBackupCopy2Component } from './src-backup-copy2/src-backup-copy2.component';

@NgModule({
  declarations: [
    AppComponent,
    STRINTRComponent,
    DemoComponent,
    SrcComponentComponent,
    SrcBackupComponent,
    SrcBackupCopy2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
