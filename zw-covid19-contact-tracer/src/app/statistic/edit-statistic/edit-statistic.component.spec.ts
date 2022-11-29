import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStatisticComponent } from './edit-statistic.component';

describe('EditStatisticComponent', () => {
  let component: EditStatisticComponent;
  let fixture: ComponentFixture<EditStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
