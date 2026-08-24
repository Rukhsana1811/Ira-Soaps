import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductIcon } from './product-icon';

describe('ProductIcon', () => {
  let component: ProductIcon;
  let fixture: ComponentFixture<ProductIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
