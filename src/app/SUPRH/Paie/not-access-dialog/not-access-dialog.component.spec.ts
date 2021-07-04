import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAccessDialogComponent } from './not-access-dialog.component';

describe('NotAccessDialogComponent', () => {
  let component: NotAccessDialogComponent;
  let fixture: ComponentFixture<NotAccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAccessDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
