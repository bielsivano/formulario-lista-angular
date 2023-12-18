import { Injectable, EventEmitter } from '@angular/core';
import { EventoHistorico } from '../model/EventoHistorico';


@Injectable({
  providedIn: 'root',
})
export class HistoricoService {
  private historico: EventoHistorico[] = [];
  historicoAtualizado: EventEmitter<void> = new EventEmitter<void>();

  adicionarEvento(acao: string, nome: string): void {
    const dataHora = new Date().toLocaleString();
    const evento: EventoHistorico = { dataHora, acao, nome };
    this.historico.push(evento);
    this.historicoAtualizado.emit();
  }

  limparHistorico(): void {
    this.historico = [];
    this.historicoAtualizado.emit();
  }

  obterHistorico(): EventoHistorico[] {
    return this.historico.slice();
  }
}
