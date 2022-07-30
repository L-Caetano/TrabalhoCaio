import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inserir-dados',
    loadChildren: () => import('./inserir-dados/inserir-dados.module').then( m => m.InserirDadosPageModule)
  },
  {
    path: 'update-dados',
    loadChildren: () => import('./update-dados/update-dados.module').then( m => m.UpdateDadosPageModule)
  },
  {
    path: 'exibir-dados',
    loadChildren: () => import('./exibir-dados/exibir-dados.module').then( m => m.ExibirDadosPageModule)
  },
  {
    path: 'inserir-dados-singer',
    loadChildren: () => import('./inserir-dados-singer/inserir-dados-singer.module').then( m => m.InserirDadosSingerPageModule)
  },
  {
    path: 'inserir-dados-album',
    loadChildren: () => import('./inserir-dados-album/inserir-dados-album.module').then( m => m.InserirDadosAlbumPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
