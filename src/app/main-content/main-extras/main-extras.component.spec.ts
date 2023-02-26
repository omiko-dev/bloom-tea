import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainExtrasComponent } from './main-extras.component';

describe('MainExtrasComponent', () => {
  let component: MainExtrasComponent;
  let fixture: ComponentFixture<MainExtrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainExtrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
