import { Component, OnInit, Inject } from '@angular/core';
import { Statistic } from '../../model/statistic.model';
import { StatisticService } from '../../service/statistic.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-statistic',
  templateUrl: './create-statistic.component.html',
  styleUrls: ['./create-statistic.component.css']
})
export class CreateStatisticComponent implements OnInit {
  totalPositive : number;
  totalNegative : number;
  totalDeaths : number;
  totalRecovered : number;
  submitted = false;

  statistics: Observable<Statistic[]>;
  provinceStatistics = [];
  statisticList = [];
  provinces = ['Bulawayo', 'Harare', 'Manicaland', 'Mash Central', 'Mash East', 'Mash West',
    'Masvingo', 'Mat North', 'Mat South', 'Midlands'];

  statistic: Statistic = new Statistic();
  constructor(private statisticService: StatisticService,
              public dialogRef: MatDialogRef<CreateStatisticComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  ngOnInit() {
    // this.reloadData();
    this.statisticService.getStatisticsList().subscribe(StatisticsL => this.statisticList = StatisticsL);
  }

  save(): void {

    this.totalPositive = 0;
    this.totalNegative = 0;
    this.totalDeaths = 0;
    this.totalRecovered = 0;

    /*this.totalPositive = this.statistic.positive;
    this.totalNegative = this.statistic.negative;
    this.totalDeaths = this.statistic.deaths;
    this.totalRecovered = this.statistic.recovered;*/

    this.statisticService.getStatisticsList().subscribe(StatisticsL => this.statisticList = StatisticsL);
    // this.statisticList = this.statisticService.getStatisticsList();
    
    for (let stat of this.statisticList) {
      if(stat.province === this.statistic.province){
        this.provinceStatistics.push(stat)
      }

    }

    for (let provinceStats of this.provinceStatistics) {

      this.totalPositive += provinceStats.positive;
      this.totalNegative += provinceStats.negative;
      this.totalDeaths += provinceStats.deaths;
      this.totalRecovered += provinceStats.recovered;
      //alert('total positive is '+this.totalPositive)
    }

    this.statistic.totalPositive = 0;
    this.statistic.totalNegative = 0;
    this.statistic.totalRecovered = 0;
    this.statistic.totalDeaths = 0;

    this.statistic.totalPositive += this.totalPositive
    this.statistic.totalPositive += this.statistic.positive
    this.statistic.totalNegative += this.totalNegative ;
    this.statistic.totalNegative +=this.statistic.negative;
    this.statistic.totalRecovered += this.totalRecovered;
    this.statistic.totalRecovered +=this.statistic.recovered;
    this.statistic.totalDeaths += this.totalDeaths;
    this.statistic.totalDeaths += this.statistic.deaths;

    
    this.statisticService.createStatistic(this.statistic).subscribe(data => alert('successfully saved!'),
      error => alert('There was an error saving data. please check the console!'));
    this.statistic = new Statistic();
    this.gotoList();
  }

  newStatistic(): void {
    this.submitted = false;
    this.statistic = new Statistic();
  }

  onSubmit(): void {
    this.save();
    this.submitted = true;
    // this.onClose();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  gotoList(): void {
    this.router.navigate(['/statistics']);
  }

}
