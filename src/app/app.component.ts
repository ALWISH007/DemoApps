import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart, ChartType } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('chart')
  public chartRef!: ElementRef;
  public chart: Chart | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    var config = {
      // type: 'bar',
      type:'funnel' as ChartType ,
      data: {
        datasets: [
          {
            data: [5, 40, 80, 100],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FFC0CB'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FFC0CB'],
          },
        ],
        labels: ['Lead', 'Prospect', 'Proposal', 'Closed'],
      },
    };
    this.chart = new Chart(this.chartRef.nativeElement, config);
  }
}
