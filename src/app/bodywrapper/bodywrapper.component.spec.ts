import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodywrapperComponent } from './bodywrapper.component';

describe('BodywrapperComponent', () => {
  let component: BodywrapperComponent;
  let fixture: ComponentFixture<BodywrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodywrapperComponent]
    });
    fixture = TestBed.createComponent(BodywrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
