import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/Item';
import { ItemService } from 'src/services/ItemService';

@Component({
  selector: 'app-inserir-itens',
  templateUrl: './inserir-itens.page.html',
  styleUrls: ['./inserir-itens.page.scss'],
})
export class InserirItensPage implements OnInit {

  //Atributos acessado no formulário.
  public item: Item = new Item();
  public lista: Item[] = this.itemService.recuperarLista();
  public nome: string;
  public quantidade: string;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.limparLocalStorage(); //Acessa o serviço de limpar LocalStorage.
    this.lista = []; //Esvazia a lista.
  }

  //Método acessado pelo botão "Insira na Lista" do formulário.
  //Acessa a construção do ítem para inserção na lista recuperada do LocalStorage e no final limpa os campos.
  public inserirItemNaLista() {
    this.item = this.contruirItem(this.nome, this.quantidade);
    let lista: Item[] = this.itemService.recuperarLista();
    lista = this.itemService.inserirItemNaLista(this.item, lista);
    this.itemService.salvarLista(lista);
    this.lista = lista;
    this.limparCampos();
  }

  //Estabelece o nome e a quantidade do ítem.
  //@params nome: string
  //@params quantidade: string
  public contruirItem(nome: string, quantidade: string): Item {
    let item: Item = new Item();
    item.nome = nome;
    item.quantidade = quantidade;
    return item;
  }

  //Limpa os campos para inserção do nome e da quantidade do ítem.
  public limparCampos() {
    this.nome = "";
    this.quantidade = "";
  }

  //Método acessado quando o usuário clica sobre o ítem.
  //Pode colocar no carrinho ou retirar da lista, a depender do valor do atributo "carrinho" do argumento "item".
  //@params item: Item
  //@params lista: Item[]
  public agir(item: Item, lista: Item[]) {
    if(item.carrinho == "Não") this.inserirItemNoCarrinho(item);
    else this.lista = this.comprar(item, this.lista);
  }

  //Insere um ítem no carrinho.
  //@params item: Item
  public inserirItemNoCarrinho(item: Item) {
    item.carrinho = "Sim";
  }

  //Acessa o serviço de remoção do ítem da lista.
  //@params item: Item
  //@params lista: Item[]
  public comprar(item: Item, lista: Item[]): Item[] {
    return this.itemService.comprar(item, lista);
  }

}
