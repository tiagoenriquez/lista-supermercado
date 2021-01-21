// Comunica a aplicação com o LocalStorage.

import { Injectable } from "@angular/core";
import { Item } from "src/models/Item";

@Injectable({
    'providedIn': 'root'
})

export class ItemService {

    //Insere um ítem na lista.
    //@params item: Item
    //@params lista: Item[]
    public inserirItemNaLista(item: Item, lista: Item[]): Item[] {
        lista.push(item);
        this.salvarLista(lista);
        return lista;
    }

    //Salva a lista no LocalStorage.
    //@params lista: Item[]
    public salvarLista(lista: Item[]) {
        localStorage.setItem('lista', JSON.stringify(lista));
    }

    //Recupera a lista do LocalStorage.
    public recuperarLista(): Item[] {
        let jasonLista = localStorage.getItem('lista');
        let lista: Item[] = [];
        if(jasonLista) lista = JSON.parse(jasonLista);
        return lista;
    }

    //Limpa o LocalStorage.
    public limparLocalStorage() {
        localStorage.clear();
    }

    //Retira um ítem da lista.
    //@params item: Item
    //@params lista: Item[]
    public comprar(item: Item, lista: Item[]): Item[] {
        let index = lista.indexOf(item);
        lista.splice(index, 1);
        return lista;
    }
    
}