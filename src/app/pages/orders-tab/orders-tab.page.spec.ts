import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { OrdersTabPageModule } from './orders-tab.module';

import { OrdersTabPage } from './orders-tab.page';

describe('Tab3Page', () => {
  let component: OrdersTabPage;
  let fixture: ComponentFixture<OrdersTabPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersTabPage],
      imports: [IonicModule.forRoot(), OrdersTabPageModule]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
