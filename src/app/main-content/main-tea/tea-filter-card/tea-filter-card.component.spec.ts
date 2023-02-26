import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaFilterCardComponent } from './tea-filter-card.component';

describe('TeaFilterCardComponent', () => {
  let component: TeaFilterCardComponent;
  let fixture: ComponentFixture<TeaFilterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaFilterCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaFilterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
