import { Component, OnInit, ViewChild } from '@angular/core';
import { PsersonService } from '../../service/pserson.service';
import { Person } from '../../model/person.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CreatePersonComponent } from '../create-person/create-person.component';
import { PersonDetailsComponent } from '../person-details/person-details.component';
import { EditPersonComponent } from '../edit-person/edit-person.component';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  person: Person;
  persons: Observable<Person[]>;
  personList = [];

  constructor(private personService: PsersonService,
    public dialog: MatDialog, private router: Router, 
    // private excelService: ExcelService
    ) { }

  listData: MatTableDataSource<any>;
      displayedColumns: string[] = ['id','dateofsubmission', 'phone', 'agerange','gender','status',
      'province','processingstatus','Actions'];
      @ViewChild(MatSort,{ static: false }) sort: MatSort;
      @ViewChild(MatPaginator,{ static: false }) paginator: MatPaginator;
      searchKey: string;

    ngOnInit() {
      this.reloadData();
      this.personService.getPersonsList().subscribe(PersonsL => this.personList = PersonsL);
    }
  
    reloadData() {
      this.persons = this.personService.getPersonsList();
      this.personService.getPersonsList().subscribe(
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
       
      let dialogRef = this.dialog.open(CreatePersonComponent, {
        height: '500px',
      });
  
    }
  
    deletePerson(id: number) {
      this.personService.deletePerson(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    }
  
    personDetails(id: number) {
      let dialogRef = this.dialog.open(PersonDetailsComponent, {
        height: '500px',
        data:{
          id: id,
        }
      });
  
      // this.router.navigate(['details', id]);
    }
  
    onEdit(id: number) {
      let dialogRef = this.dialog.open(EditPersonComponent, {
        height: '500px',
        data:{
          id: id,
        }
      });
     }
  
    /* exportAsXLSX(): void {
      this.excelService.exportAsExcelFile(this.listData.data, 'persons');
   }*/

}
