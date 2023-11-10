import { ICadastrofuncionarios } from './../model/ICadastroFuncionarios';
import { Component, OnInit } from '@angular/core';
import { ListaService } from './lista.component.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  listafuncionario:ICadastrofuncionarios [] = [];
  ListaService: any;
  ICadastrofuncionarios: any;

  constructor(private listaService: ListaService) {}

  ngOnInit(): void {
    this.listafuncionario = this.listaService.funcionarios;
  }

  excluirFuncionario(index: number): void {
    this.listaService.excluirFuncionario(index);
  }
  editarfuncionario(index:Number): void {
    this.ListaService.editarfuncionarios(index);

  }
}

