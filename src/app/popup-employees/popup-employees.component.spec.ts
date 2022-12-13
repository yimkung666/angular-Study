import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEmployeesComponent } from './popup-employees.component';

describe('PopupEmployeesComponent', () => {
  let component: PopupEmployeesComponent;
  let fixture: ComponentFixture<PopupEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
