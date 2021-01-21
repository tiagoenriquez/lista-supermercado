import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/Item';
import { ItemService } from 'src/services/ItemService';

@Component({
  selector: 'app-inserir-itens',
  templateUrl: './inserir-itens.page.html',
  styleUrls: ['./inserir-itens.page.scss'],
})
export class InserirItensPage implements OnInit {

  public item: Item = new Item();
  public lista: Item[] = this.itemService.recuperarLista();
  public nome: string;
  public quantidade: string;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.limparLocalStorage();
    this.lista = [];
  }

  public inserirItemNaLista() {
    this.item = this.contruirItem(this.nome, this.quantidade);
    let lista: Item[] = this.itemService.recuperarLista();
    lista = this.itemService.inserirItemNaLista(this.item, lista);
    this.itemService.salvarLista(lista);
    this.lista = lista;
    this.limparCampos();
  }

  public contruirItem(nome: string, quantidade: string): Item {
    let item: Item = new Item();
    item.nome = nome;
    item.quantidade = quantidade;
    return item;
  }

  public limparCampos() {
    this.nome = "";
    this.quantidade = "";
  }

  public agir(item: Item, lista: Item[]) {
    if(item.carrinho == "Não") this.inserirItemNoCarrinho(item);
    else this.lista = this.comprar(item, this.lista);
  }

  public inserirItemNoCarrinho(item: Item) {
    item.carrinho = "Sim";
  }

  public comprar(item: Item, lista: Item[]): Item[] {
    return this.itemService.comprar(item, lista);
  }

}
