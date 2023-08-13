import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneeEnCoursComponent } from './annee-en-cours.component';

describe('AnneeEnCoursComponent', () => {
  let component: AnneeEnCoursComponent;
  let fixture: ComponentFixture<AnneeEnCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnneeEnCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnneeEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
