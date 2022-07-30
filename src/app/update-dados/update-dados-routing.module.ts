import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDadosPage } from './update-dados.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDadosPageRoutingModule {}
