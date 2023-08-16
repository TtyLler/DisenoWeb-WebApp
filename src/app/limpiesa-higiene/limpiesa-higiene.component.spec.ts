import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiesaHigieneComponent } from './limpiesa-higiene.component';

describe('LimpiesaHigieneComponent', () => {
  let component: LimpiesaHigieneComponent;
  let fixture: ComponentFixture<LimpiesaHigieneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimpiesaHigieneComponent]
    });
    fixture = TestBed.createComponent(LimpiesaHigieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
