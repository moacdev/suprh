import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcomptesComponent } from './acomptes.component';

describe('AcomptesComponent', () => {
  let component: AcomptesComponent;
  let fixture: ComponentFixture<AcomptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcomptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcomptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
