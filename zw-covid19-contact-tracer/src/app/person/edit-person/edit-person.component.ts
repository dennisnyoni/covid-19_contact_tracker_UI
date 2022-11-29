import { Component, OnInit, Inject } from '@angular/core';
import { Person } from '../../model/person.model';
import { PsersonService } from '../../service/pserson.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  id: number;
  submitted = false;
  selectedPerson: Person;
  person: Person = new Person();
  constructor(private personService: PsersonService,
              public dialogRef: MatDialogRef<EditPersonComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  ngOnInit() {
    this.person = new Person();
    this.id = this.data.id;
    this.personService.getPerson(this.id)
      .subscribe(data => {
        console.log(data);
        this.person = data;},
        error => console.log(error));
  }

  save(): void {
    this.person.processing_status='processed';
    this.personService.updatePerson(this.id, this.person)
    .subscribe(data => alert('successfully updated!'),
      error => alert('There was an error saving data. please check the console!'));
    this.person = new Person();
  }

  newPerson(): void {
    this.submitted = false;
    this.person = new Person();
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
    this.router.navigate(['/persons']);
  }
}
