import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTeaComponent } from './main-tea.component';

describe('MainTeaComponent', () => {
  let component: MainTeaComponent;
  let fixture: ComponentFixture<MainTeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
