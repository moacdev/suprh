import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndemnitesComponent } from './indemnites.component';

describe('IndemnitesComponent', () => {
  let component: IndemnitesComponent;
  let fixture: ComponentFixture<IndemnitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndemnitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndemnitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
