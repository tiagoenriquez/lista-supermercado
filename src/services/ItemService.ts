import { Injectable } from "@angular/core";
import { Item } from "src/models/Item";

@Injectable({
    'providedIn': 'root'
})

export class ItemService {

    public inserirItemNaLista(item: Item, lista: Item[]): Item[] {
        lista.push(item);
        this.salvarLista(lista);
        return lista;
    }

    public salvarLista(lista: Item[]) {
        localStorage.setItem('lista', JSON.stringify(lista));
    }

    public recuperarLista(): Item[] {
        let jasonLista = localStorage.getItem('lista');
        let lista: Item[] = [];
        if(jasonLista) lista = JSON.parse(jasonLista);
        return lista;
    }

    public limparLocalStorage() {
        localStorage.clear();
    }

    public comprar(item: Item, lista: Item[]): Item[] {
        let index = lista.indexOf(item);
        lista.splice(index, 1);
        return lista;
    }
    
}