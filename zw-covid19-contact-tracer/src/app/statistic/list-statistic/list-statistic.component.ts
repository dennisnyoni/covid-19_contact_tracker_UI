import { Component, OnInit, ViewChild } from '@angular/core';
import { Statistic } from '../../model/statistic.model';
import { StatisticService } from '../../service/statistic.service';
import { CreateStatisticComponent } from '../create-statistic/create-statistic.component';
import { StatisticDetailsComponent } from '../statistic-details/statistic-details.component';
import { EditStatisticComponent } from '../edit-statistic/edit-statistic.component';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-statistic',
  templateUrl: './list-statistic.component.html',
  styleUrls: ['./list-statistic.component.css']
})
export class ListStatisticComponent implements OnInit {

  statistic: Statistic;
  statistics: Observable<Statistic[]>;
  statisticList = [];

  constructor(private statisticService: StatisticService,
              public dialog: MatDialog, private router: Router, 
              // private excelService: ExcelService
    ) { }

  listData: MatTableDataSource<any>;
      displayedColumns: string[] = ['id','dateofcollection', 'province', 'positive','totalpositive','negative','totalnegative','recovered',
      'totalrecovered','deaths','totaldeaths','Actions'];
      @ViewChild(MatSort,{ static: false }) sort: MatSort;
      @ViewChild(MatPaginator,{ static: false }) paginator: MatPaginator;
      searchKey: string;

    ngOnInit() {
      this.reloadData();
      this.statisticService.getStatisticsList().subscribe(StatisticsL => this.statisticList = StatisticsL);
      alert('this.statisticList length is '+this.statisticList.length)
    }
  
    reloadData() {
      this.statistics = this.statisticService.getStatisticsList();
      this.statisticService.getStatisticsList().subscribe(
        list => {
          const array = list.map(item => {
            return {
              $id: item.id,
              ...item
            };
          });
          // this.listData = new MatTableDataSource(array);
          this.listData = new MatTableDataSource(array);
          this.listData.sort = this.sort;
          const sortState: Sort = {active: 'id', direction: 'desc'};
          this.sort.active = sortState.active;
          this.sort.direction = sortState.direction;
          this.sort.sortChange.emit(sortState);
          this.listData.paginator = this.paginator;
        });
    }
  
    onSearchClear() {
      this.searchKey = "";
      this.applyFilter();
    }
  
    applyFilter() {
      this.listData.filter = this.searchKey.trim().toLowerCase();
    }
  
    onCreate() : void{
       
      let dialogRef = this.dialog.open(CreateStatisticComponent, {
        height: '500px',
      });
  
    }
  
    deleteStatistic(id: number) {
      this.statisticService.deleteStatistic(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    }
  
    statisticDetails(id: number) {
      let dialogRef = this.dialog.open(StatisticDetailsComponent, {
        height: '500px',
        data:{
          id: id,
        }
      });
  
      // this.router.navigate(['details', id]);
    }
  
    onEdit(id: number) {
      let dialogRef = this.dialog.open(EditStatisticComponent, {
        height: '500px',
        data:{
          id: id,
        }
      });
     }
  
    /* exportAsXLSX(): void {
      this.excelService.exportAsExcelFile(this.listData.data, 'Statistics');
   }*/


}
