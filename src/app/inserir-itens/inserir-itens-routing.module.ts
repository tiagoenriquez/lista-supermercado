import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InserirItensPage } from './inserir-itens.page';

const routes: Routes = [
  {
    path: '',
    component: InserirItensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InserirItensPageRoutingModule {}
