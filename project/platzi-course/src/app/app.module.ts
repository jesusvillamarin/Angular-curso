import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarZoneDirective } from './directivas/resaltar-zone.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResaltarZoneDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCqXSl1UtvLKV2LC_FgMlmbLWx7BKFFRAw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
