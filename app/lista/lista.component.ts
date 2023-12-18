import { ICadastrofuncionarios } from './../model/ICadastroFuncionarios';
import { Component, OnInit } from '@angular/core';
import { ListaService } from './lista.component.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  listafuncionarios: ICadastrofuncionarios[] = [];
  funcionariosEditIndex: number | null = null;

  constructor(private listaService: ListaService) {}

  ngOnInit(): void {
    this.listafuncionarios = this.listaService.funcionarios;
  }

  excluirfuncionario(index: number): void {
    this.listaService.excluirFuncionario(index);
  }

  editarfuncionario(index: number): void {
    this.funcionariosEditIndex = index;
  }

  salvarEdicao(index: number): void {
    if (index !== null) {
      this.funcionariosEditIndex = null;
      this.listaService.atualizarFuncionario(index, this.listafuncionarios[index]);
    }
  }

  cancelarEdicao(): void {
    this.funcionariosEditIndex = null;
  }
}


