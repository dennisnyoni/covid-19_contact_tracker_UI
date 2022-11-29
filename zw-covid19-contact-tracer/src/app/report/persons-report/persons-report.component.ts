import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Person } from '../../model/person.model';
import { Observable } from 'rxjs';
import { PsersonService } from '../../service/pserson.service';

@Component({
  selector: 'app-persons-report',
  templateUrl: './persons-report.component.html',
  styleUrls: ['./persons-report.component.css']
})
export class PersonsReportComponent implements OnInit {

  provincePersons = [];
  personsList = [];
  persons: Observable<Person[]>;

  positive = [];
  negative = [];
  recovered = [];
  highRiskList = [];
  suspected = [];

  positives: number;
  highRisk: number;
  recoveries: number;
  deaths: number;
  provinces = ['Bulawayo', 'Harare', 'Manicaland', 'Mash Central',
    'Mash Central', 'Mash West', 'Masvingo', 'Mat North', 'Mat South', 'Midlands'];
  // provinceData = [];
  person: Person = new Person();
  constructor(private personService: PsersonService) { }
  ngOnInit(): void {
    this.personService.getPersonsList().subscribe(PersonsL => this.personsList = PersonsL);
  }

  reloadData() {
    // alert('this.PersonList length is ' + this.personsList.length)
    this.personService.getPersonsList().subscribe(PersonsL => this.personsList = PersonsL);
    // this.Persons = this.PersonService.getPersonsList();
    for (let province of this.provinces) {

      this.positives = 0;
      this.highRisk = 0;
      //  alert('province is ' + province)
      let provinceData = [];
      for (let person of this.personsList) {
        if (person.province === province) {
          provinceData.push(person);
        }
      }
      
      if (provinceData.length > 0) {
        
        for (let provincePerson of provinceData) {
          if (provincePerson.status === 'suspected') {
            this.highRisk += 1;
          } else if (provincePerson.status === 'positive') {
            this.positives += 1;
          }
        }

      } else {
        this.highRisk = 0;
        this.positives = 0;
        // this.negative.push(0);
      }
      // alert('total positive is ' + this.highRisk+ ' for '+province)
      this.positive.push(this.positives);
      this.highRiskList.push(this.highRisk);
    }
    
  }

  lineChartLabels: Label[] = ['Bulawayo', 'Harare', 'Manicaland', 'Mash Central',
    'Mash Central', 'Mash West', 'Masvingo', 'Mat North', 'Mat South', 'Midlands'];


  lineChartData: ChartDataSets[] = [
    { data: this.positive, label: 'Positive' },
    { data: this.highRiskList, label: 'High risk' },
    
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


