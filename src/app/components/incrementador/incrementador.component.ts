import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  @Input() progreso = 50;
  @Input() btnClass = 'btn-outline-primary';
  @Output() progresoSalida: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  cambiarValor(valor: number): void {
    if (this.progreso >= 100 && valor >= 0) {
      this.progreso = 100;
    } else if (this.progreso <= 0 && valor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso += valor;
    }
    this.progresoSalida.emit(this.progreso);
  }

  onChangeProgreso(nuevoValor: number): void {
    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.progresoSalida.emit(this.progreso);
  }
}
