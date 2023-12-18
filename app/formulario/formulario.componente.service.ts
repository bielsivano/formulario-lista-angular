import { Injectable } from "@angular/core";
import { ICadastrofuncionarios } from "../model/ICadastroFuncionarios";
import { ListaService } from "../lista/lista.component.service";

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  constructor(private listaService: ListaService) {}

  adicionar(
    nomeRecebido: string,
    ultimoNomeRecebido: string,
    CargoRecebido: string,
    anoDeCadastroRecebido: number
  ): void {
    if (nomeRecebido && ultimoNomeRecebido) {
      const novofuncionario: ICadastrofuncionarios = {
        primero_nome: nomeRecebido,
        ultimo_nome: ultimoNomeRecebido,
        cargo: CargoRecebido,
        anoderegistro: anoDeCadastroRecebido
      };

      this.listaService.adicionarFuncionario(novofuncionario);
    } else {
      console.error("Nome e ultimo nome são obrigatórios");
    }
  }
}
