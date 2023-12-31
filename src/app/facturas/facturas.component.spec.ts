import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaComponent } from './facturas.component';

describe('FacturasComponent', () => {
  let component: FacturaComponent;
  let fixture: ComponentFixture<FacturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturaComponent]
    });
    fixture = TestBed.createComponent(FacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
