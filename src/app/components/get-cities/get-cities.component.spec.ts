import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCitiesComponent } from './get-cities.component';

describe('GetCitiesComponent', () => {
  let component: GetCitiesComponent;
  let fixture: ComponentFixture<GetCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
