import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetenuPageComponent } from './retenu-page.component';

describe('RetenuPageComponent', () => {
  let component: RetenuPageComponent;
  let fixture: ComponentFixture<RetenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
