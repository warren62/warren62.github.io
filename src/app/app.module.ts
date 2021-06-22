// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { NasaModule } from './nasa/nasa.module';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    NasaModule,
    LayoutModule,
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'App DevTools',
      maxAge: 25,
      logOnly: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
