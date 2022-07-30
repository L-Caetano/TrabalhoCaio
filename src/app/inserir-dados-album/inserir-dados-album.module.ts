import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InserirDadosAlbumPageRoutingModule } from './inserir-dados-album-routing.module';

import { InserirDadosAlbumPage } from './inserir-dados-album.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InserirDadosAlbumPageRoutingModule
  ],
  declarations: [InserirDadosAlbumPage]
})
export class InserirDadosAlbumPageModule {}
