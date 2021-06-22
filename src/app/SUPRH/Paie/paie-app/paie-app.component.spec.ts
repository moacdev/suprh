import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaieAppComponent } from './paie-app.component';

describe('PaieAppComponent', () => {
  let component: PaieAppComponent;
  let fixture: ComponentFixture<PaieAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaieAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaieAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
