import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatoComponent } from './plato/plato.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations:
  [PlatoComponent,PieComponent,CabeceraComponent],
  imports: [
    CommonModule
  ],exports:[PlatoComponent,PieComponent,CabeceraComponent]
})
export class ComponentesModule { }
