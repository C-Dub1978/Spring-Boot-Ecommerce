import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNavListComponent } from './product-nav-list.component';

describe('ProductNavListComponent', () => {
  let component: ProductNavListComponent;
  let fixture: ComponentFixture<ProductNavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNavListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
