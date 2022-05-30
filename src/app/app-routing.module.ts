import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule),
  },
  {
    path: 'fim-votacao',
    loadChildren: () => import('./fim-votacao/fim-votacao.module').then( m => m.FimVotacaoPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'votacao',
    loadChildren: () => import('./votacao/votacao.module').then( m => m.VotacaoPageModule)
  },
  {
    path: 'candidatos',
    loadChildren: () => import('./candidatos/candidatos.module').then( m => m.CandidatosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
