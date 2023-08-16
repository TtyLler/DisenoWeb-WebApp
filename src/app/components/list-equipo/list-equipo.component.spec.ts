import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEquipoComponent } from './list-equipo.component';

describe('ListEquipoComponent', () => {
  let component: ListEquipoComponent;
  let fixture: ComponentFixture<ListEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEquipoComponent]
    });
    fixture = TestBed.createComponent(ListEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
