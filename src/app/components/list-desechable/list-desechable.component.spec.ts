import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDesechableComponent } from './list-desechable.component';

describe('ListDesechableComponent', () => {
  let component: ListDesechableComponent;
  let fixture: ComponentFixture<ListDesechableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDesechableComponent]
    });
    fixture = TestBed.createComponent(ListDesechableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
