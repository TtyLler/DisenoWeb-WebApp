import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBitacoraComponent } from './add-edit-bitacora.component';

describe('AddEditBitacoraComponent', () => {
  let component: AddEditBitacoraComponent;
  let fixture: ComponentFixture<AddEditBitacoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditBitacoraComponent]
    });
    fixture = TestBed.createComponent(AddEditBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
