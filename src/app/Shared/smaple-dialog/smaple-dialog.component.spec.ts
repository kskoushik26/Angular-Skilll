import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmapleDialogComponent } from './smaple-dialog.component';

describe('SmapleDialogComponent', () => {
  let component: SmapleDialogComponent;
  let fixture: ComponentFixture<SmapleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmapleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmapleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
