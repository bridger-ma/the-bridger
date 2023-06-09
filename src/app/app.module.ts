import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { SectionsModule } from './sections/sections.module';

@NgModule({
  declarations: [AppComponent],
  imports: [LayoutsModule, SectionsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
