import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InserirDadosSingerPage } from './inserir-dados-singer.page';

const routes: Routes = [
  {
    path: '',
    component: InserirDadosSingerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InserirDadosSingerPageRoutingModule {}
