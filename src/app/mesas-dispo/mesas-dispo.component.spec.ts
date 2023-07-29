import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasDispoComponent } from './mesas-dispo.component';

describe('MesasDispoComponent', () => {
  let component: MesasDispoComponent;
  let fixture: ComponentFixture<MesasDispoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesasDispoComponent]
    });
    fixture = TestBed.createComponent(MesasDispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
