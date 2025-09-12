import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCalcComponent } from './cart-calc.component';

describe('CartCalcComponent', () => {
  let component: CartCalcComponent;
  let fixture: ComponentFixture<CartCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
