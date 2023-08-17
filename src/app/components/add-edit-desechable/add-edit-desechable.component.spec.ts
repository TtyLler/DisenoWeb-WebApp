import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDesechableComponent } from './add-edit-desechable.component';

describe('AddEditDesechablesComponent', () => {
  let component: AddEditDesechableComponent;
  let fixture: ComponentFixture<AddEditDesechableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditDesechableComponent]
    });
    fixture = TestBed.createComponent(AddEditDesechableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
