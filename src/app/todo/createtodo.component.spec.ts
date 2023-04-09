import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodoComponent } from './createtodo.component';

describe('TodoComponent', () => {
  let component: CreateTodoComponent;
  let fixture: ComponentFixture<CreateTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTodoComponent],
    });
    fixture = TestBed.createComponent(CreateTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
