import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';

import { ModuloModule } from 'src/app/modulos/modulo/modulo.module';
////////////////////////////////////////////////////////////////////////
import { ComponentesModule } from 'src/app/componentes/componentes.module';
@NgModule({
  imports: [
    ComponentesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    ModuloModule,
  ],
  declarations: 
  [MenuPage,]
})
export class MenuPageModule {}
