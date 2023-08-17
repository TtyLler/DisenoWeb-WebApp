import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditComestibleComponent } from './add-edit-comestible.component';

describe('AddEditComestibleComponent', () => {
  let component: AddEditComestibleComponent;
  let fixture: ComponentFixture<AddEditComestibleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditComestibleComponent]
    });
    fixture = TestBed.createComponent(AddEditComestibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
