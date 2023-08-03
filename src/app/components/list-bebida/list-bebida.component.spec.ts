import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBebidaComponent } from './list-bebida.component';

describe('ListBebidaComponent', () => {
  let component: ListBebidaComponent;
  let fixture: ComponentFixture<ListBebidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBebidaComponent]
    });
    fixture = TestBed.createComponent(ListBebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
