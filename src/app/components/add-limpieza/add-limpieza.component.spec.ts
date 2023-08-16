import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLimpiezaComponent } from './add-limpieza.component';

describe('AddLimpiezaComponent', () => {
  let component: AddLimpiezaComponent;
  let fixture: ComponentFixture<AddLimpiezaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLimpiezaComponent]
    });
    fixture = TestBed.createComponent(AddLimpiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
