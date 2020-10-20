import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPillsComponent } from './cart-pills.component';

describe('CartPillsComponent', () => {
  let component: CartPillsComponent;
  let fixture: ComponentFixture<CartPillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
