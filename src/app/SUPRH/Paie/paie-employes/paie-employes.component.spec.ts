import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaieEmployesComponent } from './paie-employes.component';

describe('PaieEmployesComponent', () => {
  let component: PaieEmployesComponent;
  let fixture: ComponentFixture<PaieEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaieEmployesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaieEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
