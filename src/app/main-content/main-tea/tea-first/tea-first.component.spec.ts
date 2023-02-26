import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaFirstComponent } from './tea-first.component';

describe('TeaFirstComponent', () => {
  let component: TeaFirstComponent;
  let fixture: ComponentFixture<TeaFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
