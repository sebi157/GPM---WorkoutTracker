import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesFormComponent } from './exercises-form.component';

describe('ExercisesFormComponent', () => {
  let component: ExercisesFormComponent;
  let fixture: ComponentFixture<ExercisesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercisesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExercisesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
