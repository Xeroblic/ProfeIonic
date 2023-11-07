import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeganoPage } from './vegano.page';

const routes: Routes = [
  {
    path: '',
    component: VeganoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeganoPageRoutingModule {}
