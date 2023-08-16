import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBebidaComponent } from './add-edit-bebida.component';

describe('AddEditBebidaComponent', () => {
  let component: AddEditBebidaComponent;
  let fixture: ComponentFixture<AddEditBebidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditBebidaComponent]
    });
    fixture = TestBed.createComponent(AddEditBebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
