import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaieUtilisateursComponent } from './paie-utilisateurs.component';

describe('PaieUtilisateursComponent', () => {
  let component: PaieUtilisateursComponent;
  let fixture: ComponentFixture<PaieUtilisateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaieUtilisateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaieUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
