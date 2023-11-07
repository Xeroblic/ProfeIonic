import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuloModule } from './modulos/modulo/modulo.module';

import { AngularFireModule } from '@angular/fire/compat/';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { QRCodeModule } from 'angularx-qrcode';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [
    ModuloModule,
    BrowserAnimationsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    QRCodeModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
