import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPaisComponent } from './add-edit-pais.component';

describe('AddEditPaisComponent', () => {
  let component: AddEditPaisComponent;
  let fixture: ComponentFixture<AddEditPaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditPaisComponent]
    });
    fixture = TestBed.createComponent(AddEditPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
