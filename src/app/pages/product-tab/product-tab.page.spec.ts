import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ProductModule } from 'src/app/modules/product/product.module';

import { ProductTabPage } from './product-tab.page';

describe('Tab1Page', () => {
  let component: ProductTabPage;
  let fixture: ComponentFixture<ProductTabPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTabPage],
      imports: [IonicModule.forRoot(), ProductModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
