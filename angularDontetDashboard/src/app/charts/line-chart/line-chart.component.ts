import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [32, 25, 39, 55, 21, 12], label: 'Sentiment Analysis' },
  { data: [54, 55, 12, 15, 56, 70], label: 'Image Recognition' },
  { data: [20, 35, 49, 77, 15, 10], label: 'Forecasting' },
];

const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul'];


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit() {
  }

}
