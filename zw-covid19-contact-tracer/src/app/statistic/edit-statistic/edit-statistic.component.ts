import { Component, OnInit, Inject } from '@angular/core';
import { Statistic } from '../../model/statistic.model';
import { StatisticService } from '../../service/statistic.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-statistic',
  templateUrl: './edit-statistic.component.html',
  styleUrls: ['./edit-statistic.component.css']
})
export class EditStatisticComponent implements OnInit {

  id: number;
  submitted = false;
  selectedStatistic: Statistic;
  statistic: Statistic = new Statistic();
  constructor(private statisticService: StatisticService,
              public dialogRef: MatDialogRef<EditStatisticComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  ngOnInit() {
    this.statistic = new Statistic();
    this.id = this.data.id;
    this.statisticService.getStatistic(this.id)
      .subscribe(data => {
        console.log(data);
        this.statistic = data;},
        error => console.log(error));
  }

  save(): void {
    this.statisticService.updateStatistic(this.id, this.statistic)
    .subscribe(data => alert('successfully updated!'),
      error => alert('There was an error saving data. please check the console!'));
    this.statistic = new Statistic();
  }

  newStatistic(): void {
    this.submitted = false;
    this.statistic = new Statistic();
  }

  onSubmit(): void {
    this.save();
    this.submitted = true;
    this.onClose();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  gotoList(): void {
    this.router.navigate(['/statistics']);
  }
}
