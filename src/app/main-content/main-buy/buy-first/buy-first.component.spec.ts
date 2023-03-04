import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFirstComponent } from './buy-first.component';

describe('BuyFirstComponent', () => {
  let component: BuyFirstComponent;
  let fixture: ComponentFixture<BuyFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
