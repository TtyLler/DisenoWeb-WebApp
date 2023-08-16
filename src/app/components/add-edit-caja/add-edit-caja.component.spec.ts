import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCajaComponent } from './add-edit-caja.component';

describe('AddEditCajaComponent', () => {
  let component: AddEditCajaComponent;
  let fixture: ComponentFixture<AddEditCajaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditCajaComponent]
    });
    fixture = TestBed.createComponent(AddEditCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
