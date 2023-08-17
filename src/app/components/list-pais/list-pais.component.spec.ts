import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaisComponent } from './list-pais.component';

describe('ListPaisComponent', () => {
  let component: ListPaisComponent;
  let fixture: ComponentFixture<ListPaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPaisComponent]
    });
    fixture = TestBed.createComponent(ListPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
