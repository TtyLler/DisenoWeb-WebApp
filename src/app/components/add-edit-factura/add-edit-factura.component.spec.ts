import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFacturaComponent } from './add-edit-factura.component';

describe('AddEditFacturaComponent', () => {
  let component: AddEditFacturaComponent;
  let fixture: ComponentFixture<AddEditFacturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditFacturaComponent]
    });
    fixture = TestBed.createComponent(AddEditFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
