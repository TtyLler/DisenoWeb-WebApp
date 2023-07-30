import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMesaComponent } from './list-mesa.component';

describe('ListMesaComponent', () => {
  let component: ListMesaComponent;
  let fixture: ComponentFixture<ListMesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMesaComponent]
    });
    fixture = TestBed.createComponent(ListMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
