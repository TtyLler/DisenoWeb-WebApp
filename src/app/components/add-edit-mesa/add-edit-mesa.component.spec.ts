import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMesaComponent } from './add-edit-mesa.component';

describe('AddEditMesaComponent', () => {
  let component: AddEditMesaComponent;
  let fixture: ComponentFixture<AddEditMesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditMesaComponent]
    });
    fixture = TestBed.createComponent(AddEditMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
