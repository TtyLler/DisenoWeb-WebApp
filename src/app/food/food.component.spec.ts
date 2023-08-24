import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodComponent } from './food.component';

describe('FoodComponent', () => {
  let component: AddFoodComponent;
  let fixture: ComponentFixture<AddFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFoodComponent]
    });
    fixture = TestBed.createComponent(AddFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
