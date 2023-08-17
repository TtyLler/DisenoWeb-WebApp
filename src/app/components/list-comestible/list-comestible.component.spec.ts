import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComestibleComponent } from './list-comestible.component';

describe('ListComestibleComponent', () => {
  let component: ListComestibleComponent;
  let fixture: ComponentFixture<ListComestibleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComestibleComponent]
    });
    fixture = TestBed.createComponent(ListComestibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
