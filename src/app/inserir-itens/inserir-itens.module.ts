import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InserirItensPageRoutingModule } from './inserir-itens-routing.module';

import { InserirItensPage } from './inserir-itens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InserirItensPageRoutingModule
  ],
  declarations: [InserirItensPage]
})
export class InserirItensPageModule {}
