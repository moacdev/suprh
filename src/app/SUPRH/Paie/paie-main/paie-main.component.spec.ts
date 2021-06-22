import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaieMainComponent } from './paie-main.component';

describe('PaieMainComponent', () => {
  let component: PaieMainComponent;
  let fixture: ComponentFixture<PaieMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaieMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaieMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
