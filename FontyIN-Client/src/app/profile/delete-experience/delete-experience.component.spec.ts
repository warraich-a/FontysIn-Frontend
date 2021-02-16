import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteExperienceComponent } from './delete-experience.component';

describe('DeleteExperienceComponent', () => {
  let component: DeleteExperienceComponent;
  let fixture: ComponentFixture<DeleteExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
