import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: "app-grafico-dona",
  templateUrl: "./grafico-dona.component.html",
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @Input("data") origenDatos: Number[] = [];
  @Input("labels") etiquetasGrafico: string[] = [];
  @Input("type") tipoGrafico: string;
  @Input("legend") leyenda: string;

  constructor() {}

  ngOnInit() {



  }
}
