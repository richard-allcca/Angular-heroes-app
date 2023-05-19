import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthModule } from './auth/auth.module';
import { HeroesModule } from './heroes/heroes.module';
// import { Error404Component } from './shared/pages/error404/error404.component';


@NgModule({
  declarations: [
      AppComponent,
      ErrorPageComponent,
      // Error404Component,
  ],
  imports: [
     BrowserModule,
     BrowserAnimationsModule,
     HttpClientModule,
     AppRoutingModule,
     AuthModule,
     HeroesModule,
     SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }