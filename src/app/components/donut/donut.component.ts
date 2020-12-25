import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [],
})
export class DonutComponent implements OnInit {
  @Input() title = '';
  @Input() labels: Label[] = [];
  @Input() data: SingleDataSet = [];

  // labels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // data: SingleDataSet = [350, 450, 100];
  charType: ChartType = 'doughnut';
  colors: Color[] = [{ backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }];
  options: ChartOptions = { maintainAspectRatio: false, responsive: true };

  constructor() {}

  ngOnInit(): void {}

  // events
  chartClicked({ event, active }: { event: MouseEvent; active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {
    console.log(event, active);
  }
}
