import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorComponent } from './list-proveedor.component';

describe('ListProveedorComponent', () => {
  let component: ProveedorComponent;
  let fixture: ComponentFixture<ProveedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedorComponent]
    });
    fixture = TestBed.createComponent(ProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
