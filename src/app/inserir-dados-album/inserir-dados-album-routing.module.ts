import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InserirDadosAlbumPage } from './inserir-dados-album.page';

const routes: Routes = [
  {
    path: '',
    component: InserirDadosAlbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InserirDadosAlbumPageRoutingModule {}
