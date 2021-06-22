import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaieCongesComponent } from './paie-conges.component';

describe('PaieCongesComponent', () => {
  let component: PaieCongesComponent;
  let fixture: ComponentFixture<PaieCongesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaieCongesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaieCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
