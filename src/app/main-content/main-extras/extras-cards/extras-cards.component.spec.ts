import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasCardsComponent } from './extras-cards.component';

describe('ExtrasCardsComponent', () => {
  let component: ExtrasCardsComponent;
  let fixture: ComponentFixture<ExtrasCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtrasCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtrasCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
