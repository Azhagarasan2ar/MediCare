import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellersAndOffersComponent } from './best-sellers-and-offers.component';

describe('BestSellersAndOffersComponent', () => {
  let component: BestSellersAndOffersComponent;
  let fixture: ComponentFixture<BestSellersAndOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSellersAndOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSellersAndOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
