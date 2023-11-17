import { HistoricoService } from '../historico/historico.component.service';
import { ICadastrofuncionarios } from './../model/ICadastroFuncionarios';
import { Injectable } from '@angular/core';


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

  constructor(private historicoService: HistoricoService) {}

  excluirFuncionario(index: number): void {
    const funcionarioExcluido = this.funcionarios[index];
    this.funcionarios.splice(index, 1);
    this.historicoService.adicionarEvento('funcionario excluído', funcionarioExcluido.primero_nome);
  }

  adicionarFuncionario(novofuncionario: ICadastrofuncionarios): void {
    this.funcionarios.push(novofuncionario);
    this.historicoService.adicionarEvento('funcionario adicionado', novofuncionario.primero_nome);
  }

  atualizarFuncionario(index: number, funcionarioAtualizado: ICadastrofuncionarios): void {
    const funcionarioAntigo = this.funcionarios[index];
    this.funcionarios[index] = funcionarioAtualizado;
    this.historicoService.adicionarEvento('funcionario editado', funcionarioAntigo.primero_nome);
  }


}
