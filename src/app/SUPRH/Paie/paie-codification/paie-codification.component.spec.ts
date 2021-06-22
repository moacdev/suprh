import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaieCodificationComponent } from './paie-codification.component';

describe('PaieCodificationComponent', () => {
  let component: PaieCodificationComponent;
  let fixture: ComponentFixture<PaieCodificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaieCodificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaieCodificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
