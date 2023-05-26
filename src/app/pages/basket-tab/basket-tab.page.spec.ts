import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BasketTabPageModule } from './basket-tab.module';

import { BasketTabPage } from './basket-tab.page';

describe('Tab2Page', () => {
  let component: BasketTabPage;
  let fixture: ComponentFixture<BasketTabPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BasketTabPage],
      imports: [IonicModule.forRoot(), BasketTabPageModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BasketTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
