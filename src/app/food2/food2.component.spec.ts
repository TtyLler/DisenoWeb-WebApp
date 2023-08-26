import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Food2Component } from './food2.component';

describe('Food2Component', () => {
  let component: Food2Component;
  let fixture: ComponentFixture<Food2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Food2Component]
    });
    fixture = TestBed.createComponent(Food2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
