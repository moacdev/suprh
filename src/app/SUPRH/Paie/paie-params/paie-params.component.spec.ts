import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaieParamsComponent } from './paie-params.component';

describe('PaieParamsComponent', () => {
  let component: PaieParamsComponent;
  let fixture: ComponentFixture<PaieParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaieParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaieParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
