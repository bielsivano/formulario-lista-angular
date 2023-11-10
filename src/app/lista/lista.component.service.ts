import { Injectable } from '@angular/core';
import { ICadastrofuncionarios } from '../model/ICadastroFuncionarios';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  funcionarios: ICadastrofuncionarios[] = [
    {
      primero_nome: 'Gabriel',
      ultimo_nome: 'Lange',
      cargo: 'Desenvolvedor',
      anoderegistro: 2018,
    },
    {
      primero_nome: 'Yan',
      ultimo_nome: 'Santana',
      cargo: 'Gerente',
      anoderegistro: 2015,
    },
  ];

  excluirFuncionario(index: number): void {
    this.funcionarios.splice(index, 1);
  }

  adicionarFuncionario(novofuncionario: ICadastrofuncionarios): void {
    this.funcionarios.push(novofuncionario);
  }
  editarfuncionario(edicaofuncionario: ICadastrofuncionarios): ICadastrofuncionarios{
  return this.editarfuncionario(edicaofuncionario)

  }

}

