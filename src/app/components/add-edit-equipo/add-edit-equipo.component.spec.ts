import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEquipoComponent } from './add-edit-equipo.component';

describe('AddEditEquipoComponent', () => {
  let component: AddEditEquipoComponent;
  let fixture: ComponentFixture<AddEditEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditEquipoComponent]
    });
    fixture = TestBed.createComponent(AddEditEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
