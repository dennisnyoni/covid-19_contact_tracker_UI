import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { ChartType, ChartDataSets } from 'chart.js';
import { StatisticService } from '../../service/statistic.service';
import { Statistic } from '../../model/statistic.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-statistics-report',
  templateUrl: './statistics-report.component.html',
  styleUrls: ['./statistics-report.component.css']
})
export class StatisticsReportComponent implements OnInit {

  provinceStatistics = [];
  statisticList = [];
  statistics: Observable<Statistic[]>;

  positive = [];
  negative = [];
  recovered = [];
  deathsList = [];

  positives: number;
  negatives: number;
  recoveries: number;
  deaths: number;
  provinces = ['Bulawayo', 'Harare', 'Manicaland', 'Mash Central',
    'Mash Central', 'Mash West', 'Masvingo', 'Mat North', 'Mat South', 'Midlands'];
  // provinceData = [];
  statistic: Statistic = new Statistic();
  constructor(private statisticService: StatisticService) { }

  ngOnInit() {
    this.statisticService.getStatisticsList().subscribe(StatisticsL => this.statisticList = StatisticsL);
    // alert('this.statisticList length is '+this.statisticList.length)
    // this.reloadData();

  }

  reloadData() {
    alert('this.statisticList length is ' + this.statisticList.length)
    this.statisticService.getStatisticsList().subscribe(StatisticsL => this.statisticList = StatisticsL);
    // this.statistics = this.statisticService.getStatisticsList();
    for (let province of this.provinces) {

     //  alert('province is ' + province)
      let provinceData = [];
      for (let statistic of this.statisticList) {
        if (statistic.province === province) {

          provinceData.push(statistic);
        }

      }
      // alert('provinceData length is ' + provinceData.length)
      if (provinceData.length > 0) {

        let provinceStatistic = provinceData[provinceData.length - 1];
        this.positive.push(provinceStatistic.totalPositive);
        // alert('positive is ' + provinceStatistic.totalPositive)
        this.negative.push(provinceStatistic.totalNegative);
        this.recovered.push(provinceStatistic.totalRecovered);
        this.deathsList.push(provinceStatistic.totalDeaths);
      } else {
        this.positive.push(0);
        this.negative.push(0);
        this.recovered.push(0);
        this.deathsList.push(0);
      }
    }

  }

  lineChartLabels: Label[] = ['Bulawayo', 'Harare', 'Manicaland', 'Mash Central',
    'Mash Central', 'Mash West', 'Masvingo', 'Mat North', 'Mat South', 'Midlands'];


  lineChartData: ChartDataSets[] = [
    { data: this.positive, label: 'Positive' },
    // { data: this.negative, label: 'Negative' },
    { data: this.recovered, label: 'Recovered' },
    { data: this.deathsList, label: 'Deaths' },
  ];
  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

}
